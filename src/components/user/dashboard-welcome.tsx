"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/core/database/firebase";
import { dayPeriod } from "@/core/helpers/getCurrentDateTime";

export default function WelcomeUser() {
  const [user, loading, error] = useAuthState(auth);
  const timeOfTheDay = dayPeriod(new Date());

  const firstName = user?.displayName?.split(" ")[0];

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">
        Good {timeOfTheDay}, {firstName}{" "}
        <span aria-label="waving hand" className="wave" role="img">
          👋
        </span>
      </h2>
    </>
  );
}
