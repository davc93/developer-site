import React, { useContext, useState } from "react";
import { User } from "@/models/user.model";
import { authService } from "@/services/auth.service";
import { AuthContext } from "@/context/AuthContext";
import { Typography, TypographySize } from "ui-react";

export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<User | null>(null);
  const { token } = useContext(AuthContext);
  const getProfile = async () => {
    setLoading(true);
    try {
      const profile = await authService.getProfile(token as string);
      setError(null);
      setProfile(profile);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getProfile()
  }, []);

    return (
      <section className="flex justify-around h-screen">
        <div className="flex flex-col ">
          
          {!loading ? Object.entries(profile as User).map((entry) => {
            return (
              <Typography size={TypographySize.bodyLarge} key={entry[0]}>
                {entry[0]}: {entry[1]}
              </Typography>
            );
          }) : (
            <Typography size={TypographySize.bodyLarge}>
              Loading...
            </Typography>
          )}
        </div>
        <div></div>
      </section>
    );
  
};
