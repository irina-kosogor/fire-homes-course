"use client";

import { Button } from "./ui/button";
import { useAuth } from "@/context/auth";

export default function ConinueWithGoogleButton() {
  const auth = useAuth();

  return <Button onClick={auth?.loginWithGoogle}>Continue with Google</Button>;
}
