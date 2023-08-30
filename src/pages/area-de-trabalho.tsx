import React, { useEffect } from "react";
import { useRouter } from "next/router";

import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import useGetUser from "../hooks/useGetUser";
import AreaDeTrabalhoTemplate from "../templates/areaDeTrabalho/AreaDeTrabalhoTemplate";

export default function areaDeTrabalho() {
  const { data: user } = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (user) {
    return <AreaDeTrabalhoTemplate />;
  }

  return <LoadingSpinner />;
}
