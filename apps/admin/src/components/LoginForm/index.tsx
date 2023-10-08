import React, { FormEventHandler, useContext, useRef } from "react";
import "./style.css";
import { authService } from "../../services/auth.service";
import { useInputValue } from "../../hooks/useInputValue";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../ErrorMessage";
import { TextField, TextFieldInputType } from "../TextField";
import { Button, ButtonSizes } from "../Button";
import { Typography, TypographySize } from "../Typography";
export const LoginForm = () => {
  //inputs handler
  const email = useInputValue("");
  const password = useInputValue("");
  // end input handler

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
    <div
    style={{background:"rgba(0,0,0,0.7)"}}
      className="form-container h-full lg:h-auto  flex flex-col items-center max-w-md w-full login-form py-8 px-8"
    >
      <Typography className="mb-8" size={TypographySize.titleSmall}>Login Form</Typography>
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
        <Button className="mt-8" label="Login" size={ButtonSizes.WIDE} type="submit" loading={loading} />
        <ErrorMessage>{error}</ErrorMessage>
      </form>
    </div>
  );
};
