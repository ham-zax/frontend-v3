'use client'

import { useSignRelayerApproval } from '@/lib/modules/relayer/signRelayerApproval.hooks'
import { ConnectWallet } from '@/lib/modules/web3/ConnectWallet'
import { useUserAccount } from '@/lib/modules/web3/useUserAccount'
import { Alert, Button, VStack } from '@chakra-ui/react'
import { StepConfig } from './useIterateSteps'
import { TransactionStep2 } from './lib'
import { SignRelayerState } from '../../relayer/useRelayerSignature'

export const signRelayerStepTitle = 'Sign relayer'

/**
  The sign relayer step is an edge-case step where there's no transaction
  but we still need a StepConfig (with no render) to display the step in the StepTracker
 */
export const signRelayerStep: StepConfig = { title: signRelayerStepTitle, render: () => <></> }

export function useSignRelayerStep(): TransactionStep2 {
  const { isConnected } = useUserAccount()
  const { signRelayer, signRelayerState, isLoading, isDisabled, buttonLabel, error } =
    useSignRelayerApproval()

  const SignRelayerButton = () => (
    <VStack width="full">
      {error && (
        <Alert rounded="md" status="error">
          {error}
        </Alert>
      )}
      {!isConnected && <ConnectWallet />}
      {isConnected && (
        <Button
          width="full"
          w="full"
          size="lg"
          variant="primary"
          isDisabled={isDisabled}
          isLoading={isLoading}
          onClick={signRelayer}
          loadingText={buttonLabel}
        >
          {buttonLabel}
        </Button>
      )}
    </VStack>
  )

  const isComplete = () => signRelayerState === SignRelayerState.Completed

  return {
    id: 'sign-relayer',
    stepType: 'signBatchRelayer',
    labels: {
      title: 'Sign relayer',
      init: 'Sign relayer',
      tooltip: 'Sign relayer',
    },
    isComplete,
    renderAction: () => <SignRelayerButton />,
  }
}

export function SignRelayerButton() {
  const { isConnected } = useUserAccount()
  const { signRelayer, isLoading, isDisabled, buttonLabel, error } = useSignRelayerApproval()

  return (
    <VStack width="full">
      {error && (
        <Alert rounded="md" status="error">
          {error}
        </Alert>
      )}
      {!isConnected && <ConnectWallet />}
      {isConnected && (
        <Button
          width="full"
          w="full"
          size="lg"
          variant="primary"
          isDisabled={isDisabled}
          isLoading={isLoading}
          onClick={signRelayer}
          loadingText={buttonLabel}
        >
          {buttonLabel}
        </Button>
      )}
    </VStack>
  )
}
