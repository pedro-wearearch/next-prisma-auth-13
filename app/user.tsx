"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h2>Client session</h2>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};
