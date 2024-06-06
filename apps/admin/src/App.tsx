import { Router } from '@/routes'
import { Providers } from './providers'

function App(): JSX.Element {
  return (
    <Providers>
      <Router />
    </Providers>
  )
}

export default App
