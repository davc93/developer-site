
import React, { FormEventHandler, useContext } from "react";
import { authService } from "../../services/auth.service";
import { useInputValue } from "../../hooks/useInputValue";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/atoms/ErrorMessage";
import { TextField, TextFieldInputType } from "../../components/atoms/TextField";
import { Button, ButtonSizes } from "ui-react/src/Button";
import { Typography, TypographySize } from "ui-react/src/Typography";
export const LoginPage = () => {
  const email = useInputValue("");
  const password = useInputValue("");
  const { setToken } = useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
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
    <section
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,q_70,w_1600/v1692046970/developer-site/developer-2.webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex flex-col justify-center lg:items-center"
    >
      <div
        style={{ background: "rgba(0,0,0,0.7)" }}
        className="form-container h-full lg:h-auto  flex flex-col items-center max-w-md w-full login-form py-8 px-8"
      >
        <Typography
          className="mb-8 text-center"
          size={TypographySize.titleSmall}
        >
          Login Form
        </Typography>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            id="email"
            name="email"
            required={true}
            {...email}
            inputType={TextFieldInputType.TEXT}
          />

          <TextField
            label="Password"
            id="password"
            name="password"
            required={true}
            {...password}
            inputType={TextFieldInputType.PASSWORD}
          />
          <Button
            type="submit"
            className="mt-8"
            
            size={ButtonSizes.WIDE}
            
            loading={loading}
          >
          Login
          </Button>
          <ErrorMessage>{error}</ErrorMessage>
        </form>
      </div>
    </section>
  );
};
