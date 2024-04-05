import React, { useContext, useState } from "react";
import { User } from "@/models/user.model";
import { authService } from "@/services/auth.service";
import { AuthContext } from "@/context/AuthContext";
import { Input, Typography, TypographySize } from "ui-react";

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
    getProfile();
  }, []);

  return (
    <section className="">
      <div className="max-w-sm">
        <Typography className="text-center" size={TypographySize.titleSmall}>Profile</Typography>
        <div className="flex flex-col">
          {!loading ? (
            Object.entries(profile as User).map((entry) => {
              return (
                <Input disabled value={entry[1]} label={entry[0]} />
              );
            })
          ) : (
            <Typography size={TypographySize.bodyLarge}>Loading...</Typography>
          )}
        </div>
      </div>
    </section>
  );
};
