import React, { useEffect } from "react";
import { useRouter } from "next/router";

import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import useGetUser from "../hooks/useGetUser";
import FormDePresenca from "../templates/presenca";

const presenca = () => {
  const { data: user } = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (user) {
    return <FormDePresenca />;
  }

  return <LoadingSpinner />;
};

export default presenca;
