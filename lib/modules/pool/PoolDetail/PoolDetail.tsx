'use client'
import { usePool } from '@/lib/modules/pool/usePool'
import { PoolChart } from './PoolChart/PoolChart'
import { Stack, Text } from '@chakra-ui/react'
import { PoolInfoTable } from './PoolInfoTable/PoolInfoTable'
import { PoolStatCards } from './PoolStatCards/PoolStatCards'
import { PoolComposition } from './PoolComposition/PoolComposition'
import { PoolActivityChart } from './PoolActivityChart/PoolActivityChart'

export function PoolDetail() {
  const { pool } = usePool()

  return (
    <Stack p="40px" maxW="maxContent" mx="auto">
      <Text>
        {pool.name}: {pool.id}
      </Text>
      <PoolStatCards />
      <PoolChart />
      <PoolActivityChart />
      <PoolComposition />
      <PoolInfoTable />
    </Stack>
  )
}
