import styles from '@/styles/wizard.module.scss'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type WizardProps = {
  lost?: boolean
  notAuthenticated?: boolean
}

export default function NotAuthenticatedWizard({
  lost,
  notAuthenticated,
}: WizardProps) {
  const t = useTranslations('NotAuthenticatedWizard')
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
        {notAuthenticated && (
          <>
            <h1>{t('message')}</h1>
            <p>{t('action')}</p>
            <p>
              {t('redirectMessage')}
              <Button className="ml-2" variant="outline">
                <Link href="/login">{t('clickHere')}</Link>
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
