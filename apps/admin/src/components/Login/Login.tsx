import { type FormEventHandler, useState } from 'react'
import { authService } from '@/services/auth.service'
import { useInputValue } from '@/hooks/useInputValue'
import {
  Button,
  ButtonSizes,
  Typography,
  TypographySize,
  Input,
  TypographyContrast,
  Error
} from 'ui-react'
import { useAuth } from '@/hooks/useAuth'

export const Login = () => {
  const email = useInputValue('')
  const password = useInputValue('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { setToken } = useAuth()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const result = await authService.login(email.value as string, password.value as string)
      const container = document.querySelector(
        '.login-container'
      ) as HTMLDivElement
      container.classList.remove('fade-right-in')
      container?.classList.add('fade-left-out')
      container?.addEventListener('animationend', (event) => {
        setError(null)
        setToken(result.token)
      })
      // container?.classList.remove("animate")
    } catch (error) {
      setError(`${error}`)
    }
    setLoading(false)
  }

  return (
    <div
      className="flex flex-col  items-center py-8 px-8"
      style={{
        minWidth: '320px',
        maxWidth: '512px'
      }}
    >
      <Typography
        color={TypographyContrast.HIGH}
        className="mb-2 text-center font-bold"
        size={TypographySize.titleSmall}
      >
        Login
      </Typography>
      <form className="w-full gap-8 flex flex-col" onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          name="email"
          required={true}
          {...email}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          required={true}
          {...password}
        />
        <Button
          type="submit"
          className="mt-8"
          size={ButtonSizes.WIDE}
          loading={loading}
        >
          Login
        </Button>
      </form>
      <Error>{error}</Error>
    </div>
  )
}
