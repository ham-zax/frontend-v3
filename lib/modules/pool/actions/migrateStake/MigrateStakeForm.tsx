'use client'

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useMigrateStake } from './MigrateStakeProvider'
import { MigrateStakePreview } from './MigrateStakePreview'
import { MigrateStakeModal } from './MigrateStakeModal'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { migrateStakeTooltipLabel } from '../stake.helpers'
import BalTooltip from '@/lib/shared/components/tooltips/BalTooltip'

export function MigrateStakeForm() {
  const nextBtn = useRef(null)
  const { onClose, onOpen, isOpen } = useDisclosure()

  const { isDisabled, disabledReason, isLoading } = useMigrateStake()

  return (
    <Box h="full" w="full" maxW="lg" mx="auto">
      <Card>
        <CardHeader isTruncated>
          Migrate to new staking gauge{' '}
          <BalTooltip label={migrateStakeTooltipLabel}>
            <InfoOutlineIcon fontSize="sm" color="grayText" />
          </BalTooltip>
        </CardHeader>

        <CardBody>
          <MigrateStakePreview />
        </CardBody>
        <CardFooter>
          <BalTooltip label={isDisabled ? disabledReason : ''}>
            <Button
              ref={nextBtn}
              variant="secondary"
              w="full"
              size="lg"
              isDisabled={isDisabled}
              isLoading={isLoading}
              onClick={() => !isDisabled && onOpen()}
            >
              Next
            </Button>
          </BalTooltip>
        </CardFooter>
      </Card>
      <MigrateStakeModal
        finalFocusRef={nextBtn}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  )
}
