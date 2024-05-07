'use client'

import { DesktopStepTracker } from '@/lib/modules/transactions/transaction-steps/step-tracker/DesktopStepTracker'
import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  VStack,
} from '@chakra-ui/react'
import { RefObject, useRef } from 'react'
import { usePool } from '../../usePool'
import { useAddLiquidity } from './useAddLiquidity'
// eslint-disable-next-line max-len
import { getStylesForModalContentWithStepTracker } from '@/lib/modules/transactions/transaction-steps/step-tracker/useStepTrackerProps'
import { useBreakpoints } from '@/lib/shared/hooks/useBreakpoints'
import { AddLiquidityPreview } from './modal/AddLiquidityPreview'
import { AddLiquidityTimeout } from './modal/AddLiquidityTimeout'
import { AddLiquiditySubmitted } from './AddLiquiditySubmitted'
import { useTransactionFlow } from '@/lib/modules/transactions/transaction-steps/TransactionFlowProvider'

type Props = {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  finalFocusRef?: RefObject<HTMLInputElement>
}

export function AddLiquidityModal({
  isOpen,
  onClose,
  finalFocusRef,
  ...rest
}: Props & Omit<ModalProps, 'children'>) {
  const { isDesktop } = useBreakpoints()
  const initialFocusRef = useRef(null)
  const { currentStep } = useAddLiquidity()
  const { pool } = usePool()
  const { isFlowComplete, isFlowConfirming } = useTransactionFlow()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      finalFocusRef={finalFocusRef}
      isCentered
      {...rest}
    >
      <ModalOverlay />
      <ModalContent {...getStylesForModalContentWithStepTracker(isDesktop)}>
        {isDesktop && <DesktopStepTracker chain={pool.chain} />}
        <ModalHeader>
          <HStack justify="space-between" w="full" pr="lg">
            <span>Add liquidity</span>
            <AddLiquidityTimeout />
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddLiquidityPreview />
        </ModalBody>
        <ModalFooter>
          <VStack w="full">{currentStep.renderAction()}</VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
