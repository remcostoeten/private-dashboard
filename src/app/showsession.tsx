import { authOptions } from "@/core/lib/auth-options"
import { getServerSession } from "next-auth/next"

export default async function Ssession() {
  const session = await getServerSession(authOptions)
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}
