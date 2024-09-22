import { useMemo } from 'react'
import { Address, parseUnits } from 'viem'
import { ApprovalAction } from '../tokens/approvals/approval-labels'
import { RawAmount } from '../tokens/approvals/approval-rules'
import { useTokenApprovalSteps } from '../tokens/approvals/useTokenApprovalSteps'
import { OSwapAction } from './swap.types'
import { SwapStepParams, useSwapStep } from './useSwapStep'
import { useRelayerMode } from '../relayer/useRelayerMode'
import { useShouldSignRelayerApproval } from '../relayer/signRelayerApproval.hooks'
import { getChainId } from '@/lib/config/app.config'
import { useApproveRelayerStep } from '../relayer/useApproveRelayerStep'
import { useSignRelayerStep } from '../transactions/transaction-steps/useSignRelayerStep'

type Params = SwapStepParams & {
  vaultAddress: Address
}

export function useSwapSteps({
  swapState,
  vaultAddress,
  handler,
  wethIsEth,
  simulationQuery,
  swapAction,
  tokenInInfo,
  tokenOutInfo,
}: Params) {
  const chainId = getChainId(swapState.selectedChain)

  const relayerMode = useRelayerMode()
  const shouldSignRelayerApproval = useShouldSignRelayerApproval(chainId, relayerMode)
  const { step: approveRelayerStep, isLoading: isLoadingRelayerApproval } =
    useApproveRelayerStep(chainId)
  const signRelayerStep = useSignRelayerStep(swapState.selectedChain)

  const humanAmountIn = swapState.tokenIn.amount
  const tokenInAmounts = useMemo(() => {
    if (!tokenInInfo || !humanAmountIn) return [] as RawAmount[]

    try {
      const parsedAmount = parseUnits(humanAmountIn, tokenInInfo.decimals)
      return [
        {
          address: tokenInInfo.address as Address,
          rawAmount: parsedAmount,
        },
      ]
    } catch (error) {
      console.error('Error parsing amount:', error)
      return [] as RawAmount[]
    }
  }, [humanAmountIn, tokenInInfo])

  const approvalActionType: ApprovalAction =
    swapAction === OSwapAction.UNWRAP ? 'Unwrapping' : 'Swapping'

  const { isLoading: isLoadingTokenApprovalSteps, steps: tokenApprovalSteps } =
    useTokenApprovalSteps({
      spenderAddress: vaultAddress,
      chain: swapState.selectedChain,
      approvalAmounts: tokenInAmounts,
      actionType: approvalActionType,
    })

  const swapStep = useSwapStep({
    handler,
    wethIsEth,
    swapState,
    simulationQuery,
    swapAction,
    tokenInInfo,
    tokenOutInfo,
  })

  const steps = useMemo(() => {
    return [...tokenApprovalSteps, swapStep]
  }, [
    tokenApprovalSteps,
    swapStep,
    relayerMode,
    shouldSignRelayerApproval,
    approveRelayerStep,
    signRelayerStep,
  ])

  return {
    isLoadingSteps: isLoadingTokenApprovalSteps || isLoadingRelayerApproval,
    steps,
  }
}
