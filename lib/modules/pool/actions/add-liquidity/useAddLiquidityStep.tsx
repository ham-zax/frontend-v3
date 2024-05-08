/* eslint-disable react-hooks/exhaustive-deps */
import {
  TransactionLabels,
  TransactionStep2,
} from '@/lib/modules/transactions/transaction-steps/lib'
import { AddLiquidityBuildQueryResponse } from './queries/useAddLiquidityBuildCallDataQuery'
import { usePool } from '../../usePool'
import { sentryMetaForWagmiSimulation } from '@/lib/shared/utils/query-errors'
import { ManagedSendTransactionButton } from '@/lib/modules/transactions/transaction-steps/TransactionButton'
import { useTransactionSteps } from '@/lib/modules/transactions/transaction-steps/TransactionStepsProvider'
import { AddLiquiditySimulationQueryResult } from './queries/useAddLiquiditySimulationQuery'

export const addLiquidityStepId = 'add-liquidity'

export function useAddLiquidityStep(
  simulationQuery: AddLiquiditySimulationQueryResult,
  buildCallDataQuery: AddLiquidityBuildQueryResponse
): TransactionStep2 {
  const { chainId } = usePool()
  const { getTransaction } = useTransactionSteps()

  const labels: TransactionLabels = {
    init: 'Add liquidity',
    title: 'Add liquidity',
    confirming: 'Confirming...',
    confirmed: `Liquidity added to pool!`,
    tooltip: 'Add liquidity to pool.',
  }

  const gasEstimationMeta = sentryMetaForWagmiSimulation('Error in AddLiquidity gas estimation', {
    simulationQueryData: simulationQuery.data,
    buildCallQueryData: buildCallDataQuery.data,
  })

  const transaction = getTransaction(addLiquidityStepId)

  const isComplete = () => transaction?.result.isSuccess || false

  return {
    id: addLiquidityStepId,
    stepType: 'addLiquidity',
    labels,
    isComplete,
    renderAction: () => (
      <ManagedSendTransactionButton
        id={addLiquidityStepId}
        labels={labels}
        chainId={chainId}
        txConfig={buildCallDataQuery.data}
        gasEstimationMeta={gasEstimationMeta}
      />
    ),
  }
}
