import React, { useContext, useState } from "react";
import { User } from "../../models/user.model";
import { authService } from "../../services/auth.service";
import { AuthContext } from "../../context/AuthContext";
import { Typography, TypographySize } from "../../components/atoms/Typography";
import { ErrorMessage } from "../../components/atoms/ErrorMessage";

export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<User | null>(null)
  const { token } = useContext(AuthContext);
  const getProfile = async () => {
    setLoading(true);
    try {
      const profile = await authService.getProfile(token as string);
      setError(null);
      setProfile(profile)
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getProfile();
  }, []);
  
  if (loading) {
    return <p>Loading...</p>;
  }  else {
    return (
      <section className="flex bg-dark justify-around h-screen">
        <div className="flex flex-col ">
          {Object.entries(profile as User).map((entry) => {
            return (
              <Typography size={TypographySize.bodyLarge} key={entry[0]}>
                {entry[0]}: {entry[1]}
              </Typography>
            );
          })}
          <ErrorMessage>{error}</ErrorMessage>
        </div>
        <div></div>
      </section>
    );
  }
};
