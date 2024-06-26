import React, { useState } from "react";
import type { User } from "@/models/user.model";
import { authService } from "@/services/auth.service";
import { Input, Typography, TypographySize } from "ui-react";
import { useAuth } from "@/hooks/useAuth";

export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<User | null>(null);
  const { token } = useAuth()
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
        <Typography className="text-center" size={TypographySize.titleSmall}>
          Profile
        </Typography>
        <div className="flex flex-col">
          {!loading ? (
            Object.entries(profile as User).map((entry) => {
              return <Input disabled value={entry[1]} label={entry[0]} />;
            })
          ) : (
            <Skeletons />
          )}
        </div>

      </div>
    </section>
  );
};
export const Skeletons = () => {
  return (
  <>
    <div className="space space-y-2 h-24">
      <div className="h-4 w-24 animate-pulse bg-gray-400 rounded-lg"></div>
      <div className="h-8 w-full animate-pulse bg-gray-400 rounded-lg"></div>
    </div>
    <div className="space space-y-2 h-24">
      <div className="h-4 w-24 animate-pulse bg-gray-400 rounded-lg"></div>
      <div className="h-8 w-full animate-pulse bg-gray-400 rounded-lg"></div>
    </div>
    <div className="space space-y-2 h-24">
      <div className="h-4 w-24 animate-pulse bg-gray-400 rounded-lg"></div>
      <div className="h-8 w-full animate-pulse bg-gray-400 rounded-lg"></div>
    </div>
    <div className="space space-y-2 h-24">
      <div className="h-4 w-24 animate-pulse bg-gray-400 rounded-lg"></div>
      <div className="h-8 w-full animate-pulse bg-gray-400 rounded-lg"></div>
    </div>
    <div className="space space-y-2 h-24">
      <div className="h-4 w-24 animate-pulse bg-gray-400 rounded-lg"></div>
      <div className="h-8 w-full animate-pulse bg-gray-400 rounded-lg"></div>
    </div>  
  </>

  );
};
