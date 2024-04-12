import { Login } from "@/containers/Login/Login";

export const LoginPage = () => {
  return (
    <section
    className="h-full flex items-center"
    
    
    
    
    >
      <div className="ml-16 w-full max-w-lg login-container fade-right-in rounded-md" 
      style={{
        border:"2px solid var(--primary--400)",
        boxShadow:"var(--shadow-md)"
      }}>
        <Login />
      </div>
    </section>
  );
};
