"use client";

import { SessionProvider } from "react-session-provider";

export default function NextAuthSessionProvider({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}