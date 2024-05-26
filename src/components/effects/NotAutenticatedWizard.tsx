import styles from '@/styles/wizard.module.scss'
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
    <div className={styles.body}>
      <div className={styles.gandalf}>
        <div className={styles.fireball}></div>
        <div className={styles.skirt}></div>
        <div className={styles.sleeves}></div>
        <div className={styles.shoulders}>
          <div className={`${styles.hand} ${styles.left}`}></div>
          <div className={`${styles.hand} ${styles.right}`}></div>
        </div>
        <div className={styles.head}>
          <div className={styles.hair}></div>
          <div className={styles.beard}></div>
        </div>
      </div>
      <div className={styles.message}>
        {notAuthenticated && !user && (
          <>
            <h1 className="text-wite">You are not authenticated.</h1>
            <p>Please log in to continue.</p>
            <p>
              To log in,
              <Button className="ml-2" variant="outline">
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
              <Button className="ml-2" variant="outline">
                <Link href="/dashboard">Lost click here</Link>
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
