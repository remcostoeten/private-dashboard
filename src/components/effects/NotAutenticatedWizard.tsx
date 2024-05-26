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
    lost,
    notAuthenticated,
}: WizardProps) {
    const [user, loading, error] = useAuthState(auth) // Use the hook correctly

    const t = {
        "message": "You are not authenticated.",
        "action": "Please log in to continue.",
        "redirectMessage": "To log in,",
        "clickHere": "click here"
    }

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
                        <h1>{t.message}</h1>
                        <p>{t.action}</p>
                        <p>
                            {t.redirectMessage}
                            <Button className="ml-2" variant="outline">
                                <Link href="/login">{t.clickHere}</Link>
                            </Button>
                        </p>
                    </>
                )}
                {lost && (
                    <>
                        <h1>{t['message-lost']}</h1>
                        <p>{t['action-lost']}</p>
                        <p>
                            {t['redirectMessage-lost']}
                            <Button className="ml-2" variant="outline">
                                <Link href="/dashboard">{t['clickHere-lost']}</Link>
                            </Button>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}