import { Input } from "ui-react";
import { FormEventHandler, useContext, useState } from "react";
import { authService } from "@/services/auth.service";
import { useInputValue } from "@/hooks/useInputValue";
import { AuthContext } from "@/context/AuthContext";

import { Button, ButtonSizes } from "ui-react";
import { Typography, TypographySize } from "ui-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const email = useInputValue("");
  const password = useInputValue("");
  const { setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const token = await authService.login(email.value, password.value);

      setError(null);
      setToken(token.token);
      navigate("/projects");
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  return (
    <div
      style={{ background: "rgba(0,0,0,0.7)" }}
      className="form-container h-full lg:h-auto  flex flex-col items-center max-w-md w-full login-form py-8 px-8"
    >
      <Typography className="mb-8 text-center" size={TypographySize.titleSmall}>
        Login Form
      </Typography>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
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
    </div>
  );
};
