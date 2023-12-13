'use client'

import {
  Button,
  Card,
  HStack,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import { RefObject, useRef } from 'react'
import { priceImpactFormat } from '@/lib/shared/utils/numbers'
import { usePool } from '../../usePool'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { FiArrowLeft } from 'react-icons/fi'
import TokenRow from '@/lib/modules/tokens/TokenRow/TokenRow'
import { Address } from 'viem'
import { useRemoveLiquidity } from './useRemoveLiquidity'
import RemoveLiquidityBptRow from './RemoveLiquidityBptRow'

type Props = {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  finalFocusRef?: RefObject<HTMLInputElement>
}

export function RemoveLiquidityModal({
  isOpen,
  onClose,
  finalFocusRef,
  ...rest
}: Props & Omit<ModalProps, 'children'>) {
  const initialFocusRef = useRef(null)
  const {
    //executeRemoveLiquidity,
    selectedRemoveLiquidityType,
    singleToken,
  } = useRemoveLiquidity()
  const { pool, bptPrice } = usePool()

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
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Icon as={FiArrowLeft} aria-label="back" />
            <Heading fontWeight="bold" size="h5">
              Remove liquidity
            </Heading>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="md" align="start">
            <Card variant="level0" p="md" w="full">
              <VStack align="start" spacing="md">
                <Text fontWeight="bold" fontSize="1rem">
                  You&apos;re removing
                </Text>
                <RemoveLiquidityBptRow pool={pool} amount={0} bptPrice={bptPrice} />
              </VStack>
            </Card>
            <Card variant="level0" p="md" w="full">
              <VStack align="start" spacing="md">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="bold" fontSize="1rem">
                    You&apos;ll get at least
                  </Text>
                  <Text fontWeight="medium" variant="secondary" fontSize="0.85rem">
                    With max slippage: 0.50%
                  </Text>
                </HStack>
                {selectedRemoveLiquidityType === 'PROPORTIONAL' &&
                  pool.displayTokens.map(token => (
                    <TokenRow
                      key={token.address}
                      address={token.address as Address}
                      chain={pool.chain}
                      value={0}
                    />
                  ))}
                {selectedRemoveLiquidityType === 'SINGLE_TOKEN' && singleToken && (
                  <TokenRow address={singleToken.address as Address} chain={pool.chain} value={0} />
                )}
              </VStack>
            </Card>
            <Card variant="level0" p="md" w="full">
              <VStack align="start" spacing="md">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="medium" variant="secondary">
                    Price impact
                  </Text>
                  <HStack>
                    <Text fontWeight="medium" variant="secondary">
                      {priceImpactFormat(0)}
                    </Text>
                    <Tooltip label="Price impact" fontSize="sm">
                      <InfoOutlineIcon color="GrayText" />
                    </Tooltip>
                  </HStack>
                </HStack>
              </VStack>
            </Card>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            w="full"
            size="lg"
            variant="primary"
            // onClick={executeRemoveLiquidity}
          >
            Confirm remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
