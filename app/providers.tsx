"use client";

import { SessionProvider as Provider } from "next-auth/react";

type IProps = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: IProps) {
  return <Provider>{children}</Provider>;
}
