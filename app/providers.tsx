import { TokensProvider } from '@/lib/modules/tokens/useTokens'
import { Web3Provider } from '@/lib/modules/web3/Web3Provider'
import { ApolloProviderWrapper } from '@/lib/shared/services/api/apollo.provider'
import { ThemeProvider } from '@/lib/shared/services/chakra/ThemeProvider'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { UserDataProvider } from '@/lib/modules/user/useUserData'
import { COLOR_MODE_STORAGE_KEY } from '@/lib/shared/services/chakra/colorModeManager'
import { RecentTransactionsProvider } from '@/lib/modules/transactions/RecentTransactionsProvider'

export function Providers({ children }: { children: ReactNode }) {
  const initialColorMode = cookies().get(COLOR_MODE_STORAGE_KEY)?.value

  return (
    <ThemeProvider initialColorMode={initialColorMode}>
      <Web3Provider>
        <ApolloProviderWrapper>
          <TokensProvider>
            <UserDataProvider>
              <RecentTransactionsProvider>{children}</RecentTransactionsProvider>
            </UserDataProvider>
          </TokensProvider>
        </ApolloProviderWrapper>
      </Web3Provider>
    </ThemeProvider>
  )
}
