import { testHook } from '@/test/utils/custom-renderers'
import { waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useConstructApproveRelayerStep } from './useConstructApproveRelayerStep'
import { useHasApprovedRelayer } from './useHasApprovedRelayer'
import { connectWithDefaultUser } from '../../../test/utils/wagmi/wagmi-connections'
import { TransactionFlowProvider } from '../transactions/transaction-steps/TransactionFlowProvider'

test('Runs relayer approval transaction and queries that it was approved', async () => {
  await connectWithDefaultUser()

  const { result } = testHook(() => useConstructApproveRelayerStep(1), {
    wrapper: TransactionFlowProvider,
  })

  await waitFor(() => expect(result.current.simulation.isSuccess).toBeTruthy())

  await act(() => result.current.executeAsync?.())

  await waitFor(() => expect(result.current.execution.isSuccess).toBeTruthy())

  const { result: result2 } = testHook(useHasApprovedRelayer)

  await waitFor(() => expect(result2.current.hasApprovedRelayer).toBeTruthy())
})
