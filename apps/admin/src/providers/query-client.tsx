import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'
const client = new QueryClient()

export const QueryClientProvider = ({
  children
}: {
  children: ReactNode
}): JSX.Element => {
  return (
    <ReactQueryClientProvider client={client}>
        {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  )
}
