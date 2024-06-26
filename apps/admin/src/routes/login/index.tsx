import { Login } from '@/components/Login/Login'

export const LoginPage = (): JSX.Element => {
  return (
    <section className="h-full flex items-center">
      <div
        className="w-full max-w-lg login-container fade-right-in rounded-md "
        style={{
          border: '2px solid var(--secondary--400)',
          boxShadow: '0 0 10px 4px var(--secondary--600)'
        }}
      >
        <Login />
      </div>
    </section>
  )
}
