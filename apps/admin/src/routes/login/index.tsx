import { Login } from "@/containers/Login/Login";

export const LoginPage = () => {
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
      <Login />
    </section>
  );
};
