import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/core/database/firebase'

type WizardProps = {
  lost?: boolean
  notAuthenticated?: boolean
}

export default function NotAuthenticatedWizard({
  lost = true,
  notAuthenticated,
}: WizardProps) {
  const [user, loading, error] = useAuthState(auth)

  return (
    <div>
      {notAuthenticated && !user && (
        <>
          <h1>You are not authenticated.</h1>
          <p>Please log in to continue.</p>
          <p>
            To log in,
            <Button variant="outline">
              <Link href="/login">click here</Link>
            </Button>
          </p>
        </>
      )}
      {lost && (
        <>
          <h1>Lost message</h1>
          <p>Lost action</p>
          <p>
            Lost redirect message
            <Button variant="outline">
              <Link href="/dashboard">Lost click here</Link>
            </Button>
          </p>
        </>
      )}
    </div>
  )
}
