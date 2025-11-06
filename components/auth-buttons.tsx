"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";

export default function AuthButtons() {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>{auth.currentUser.email}</div>
          <div>Logout</div>
        </>
      )}

      {!auth?.currentUser && (
        <ul className="flex gap-6">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Signup</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
