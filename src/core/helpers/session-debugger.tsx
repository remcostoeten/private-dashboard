import { auth } from "@/auth";
import AuthButton from "@/auth/AuthButton.server";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex gap-2 items-center">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <AuthButton />
    </div>
  );
}
