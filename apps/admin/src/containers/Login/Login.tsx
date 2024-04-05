import { Input,Error } from "ui-react";
import { FormEventHandler, useContext, useState } from "react";
import { authService } from "@/services/auth.service";
import { useInputValue } from "@/hooks/useInputValue";
import { AuthContext } from "@/context/AuthContext";

import { Button, ButtonSizes } from "ui-react";
import { Typography, TypographySize } from "ui-react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "@/utils";

export const Login = () => {
  const email = useInputValue("");
  const password = useInputValue("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {setToken} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authService.login(email.value, password.value);
      
      //execute animation
      const container = document.querySelector(".login-container") as HTMLDivElement
      container.classList.remove("fade-right-in")
      container?.classList.add("fade-left-out")
      container?.addEventListener("animationend",(event)=>{
        setError(null);
        setToken(result.token)
        navigate("/dashboard");
      })
      // container?.classList.remove("animate")

    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col gap-4 items-center py-8 px-8"
      style={{
        backgroundColor:"rgba(0,0,0,0.3)",
        minWidth:"320px",
        maxWidth:"512px"
      }}
    >
      <Typography className="mb-2 text-center font-bold" size={TypographySize.titleSmall}>
        Login 
      </Typography>
      <form
      className="w-full"
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
          type="password"
          required={true}
          {...password}
        />
        <Button
          type="submit"
          className="mt-16 mb-4"
          size={ButtonSizes.WIDE}
          loading={loading}
        >
          Login
        </Button>
      </form>
      <Error>
        {error}
      </Error>
    </div>
  );
};

