import { useEffect, useState } from "react";

const useUserEmail = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("userEmail") || undefined;
      setUserEmail(email);
    }
  }, []);

  return userEmail;
};

export default useUserEmail;
