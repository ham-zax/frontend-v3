'use client'

import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { GqlPoolApr } from '@/lib/shared/services/api/generated/graphql'
import { VStack, Text, HStack, Tag, Icon } from '@chakra-ui/react'
import { getNetworkConfig } from '@/lib/config/app.config'
import { PoolListItem } from '../../../pool.types'
import { getAprLabel } from '../../../pool.utils'
import { FiGlobe } from 'react-icons/fi'
import { useUserData } from '@/lib/modules/user/useUserData'
import { fiatFormat } from '@/lib/shared/utils/numbers'
import { useUserAccount } from '@/lib/modules/web3/useUserAccount'

export const usePoolListTableColumns = (): ColumnDef<PoolListItem>[] => {
  const { getUserBalanceUSD } = useUserData()
  const { isConnected } = useUserAccount()

  const columns: ColumnDef<PoolListItem>[] = [
    {
      id: 'chainLogoUrl',
      header: () => <Icon as={FiGlobe} boxSize="6" ml="1" />,
      cell: ({ row: { original: pool } }) => {
        const networkConfig = getNetworkConfig(pool.chain)
        return (
          <Image
            src={networkConfig.iconPath}
            width="30"
            height="30"
            alt={networkConfig.shortName}
          />
        )
      },
      size: 30,
    },
    {
      id: 'details',
      header: () => <Text>Details</Text>,
      cell: ({ row: { original: pool } }) => {
        return (
          <VStack align="start">
            <Text isTruncated>{pool.name}</Text>
            <HStack wrap="wrap">
              {pool.displayTokens.map(token => (
                <Tag key={token.address}>{token.symbol}</Tag>
              ))}
            </HStack>
          </VStack>
        )
      },
      size: 9999, // use '9999' so we can set {width: 'auto'} in DataTable
    },
    {
      id: 'totalLiquidity',
      accessorKey: 'dynamicData.totalLiquidity',
      header: () => <Text ml="auto">TVL</Text>,
      cell: props => {
        const value = fiatFormat(props.getValue() as string)
        return (
          <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {value}
          </Text>
        )
      },
      size: 175,
    },
    {
      id: 'volume24h',
      accessorKey: 'dynamicData.volume24h',
      header: () => <Text ml="auto">Volume (24h)</Text>,
      cell: props => {
        const value = fiatFormat(props.getValue() as string)

        return (
          <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {value}
          </Text>
        )
      },
      size: 175,
    },
    {
      id: 'apr',
      accessorKey: 'dynamicData.apr',
      header: () => <Text ml="auto">APR</Text>,
      cell: row => {
        const value = row.getValue<GqlPoolApr>()
        const apr = getAprLabel(value.apr)

        return (
          <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {apr}
          </Text>
        )
      },
      size: 175,
    },
  ]

  if (isConnected) {
    // Insert 'My liquidity' column before 'TVL' if wallet is connected
    columns.splice(2, 0, {
      id: 'myLiquidity',
      header: () => <Text ml="auto">My liquidity</Text>,
      cell: ({ row: { original: pool } }) => {
        const balance = getUserBalanceUSD(pool.id, pool.chain)
        const value = fiatFormat(balance)

        return (
          <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {value}
          </Text>
        )
      },
      size: 175,
    })
  }

  return columns
}
