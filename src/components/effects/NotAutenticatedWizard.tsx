import React, { useEffect } from 'react'
import styles from '@/styles/wizard.module.scss'
import { useRouter } from 'next/navigation'

export default function NotAutenticatedWizard() {
    const router = useRouter();
    return (
        <div>
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
                <h1>You're not authenticated</h1>
                <p>Please log in to access this page.</p>
                <p>
                    If you're not redirected,{' '}
                    <button onClick={() => router.push('/login')}>click here</button>.
                </p>
            </div>
        </div>
    )
}

