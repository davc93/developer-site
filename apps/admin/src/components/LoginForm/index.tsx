import React, { FormEventHandler, useContext, useRef } from "react";
import "./style.css";
import { authService } from "../../services/auth.service";
import { useInputValue } from "../../hooks/useInputValue";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "../ButtonLoader";
import { ErrorMessage } from "../ErrorMessage";
import { TextField, TextFieldInputType } from "../TextField";
import { Button, ButtonSizes } from "../Button";
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
      navigate("/profile");
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        border: "1px solid var(--primary)",
        maxWidth: 500,
        gridColumn: 2,
      }}
      className="form-container bg-dark flex flex-col items-center w-full login-form py-8 px-8"
    >
      <h4 className="uppercase" style={{ color: "var(--light)" }}>
        Login
      </h4>
      <form
        className="flex flex-col items-center gap-6"
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
        <Button label="Login" size={ButtonSizes.WIDE} type="submit" loading={loading} />
        <ErrorMessage>{error}</ErrorMessage>
      </form>
    </div>
  );
};
