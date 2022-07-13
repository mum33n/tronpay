import React, { createContext, useContext, useMemo, useState } from "react";

const profileContext = createContext();
function ProfileProvider({ children }) {
  const [profile, setProfile] = useState();
  const values = useMemo(() => {
    return { profile, setProfile };
  }, [profile, setProfile]);
  return (
    <profileContext.Provider value={values}>{children}</profileContext.Provider>
  );
}

export default ProfileProvider;
export const useProfileContext = () => useContext(profileContext);
