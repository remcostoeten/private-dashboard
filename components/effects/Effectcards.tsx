'use client';
import { useEffect } from 'react';
import { GUI } from 'dat.gui'; // Ensure you have this package installed

interface Config {
    proximity: number;
    spread: number;
    blur: number;
    gap: number;
    vertical: boolean;
    opacity: number;
}

export default function GlowingCards() {
    useEffect(() => {
        const CONTAINER = document.querySelector('.container') as HTMLElement;
        const CARDS = document.querySelectorAll('article');

        const CONFIG: Config = {
            proximity: 40,
            spread: 80,
            blur: 20,
            gap: 32,
            vertical: false,
            opacity: 0,
        };

        const UPDATE = (event: PointerEvent) => {
            for (const CARD of CARDS) {
                const CARD_BOUNDS = CARD.getBoundingClientRect();
                if (
                    event.x > CARD_BOUNDS.left - CONFIG.proximity &&
                    event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
                    event.y > CARD_BOUNDS.top - CONFIG.proximity &&
                    event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
                ) {
                    CARD.style.setProperty('--active', '1');
                } else {
                    CARD.style.setProperty('--active', CONFIG.opacity.toString());
                }
                const CARD_CENTER = [
                    CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
                    CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
                ];
                let ANGLE =
                    (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) * 180) / Math.PI;
                ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
                CARD.style.setProperty('--start', (ANGLE + 90).toString());
            }
        };

        document.body.addEventListener('pointermove', UPDATE);

        const RESTYLE = () => {
            CONTAINER.style.setProperty('--gap', CONFIG.gap.toString());
            CONTAINER.style.setProperty('--blur', CONFIG.blur.toString());
            CONTAINER.style.setProperty('--spread', CONFIG.spread.toString());
            CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');
        };

        const CTRL = new GUI({
            width: 340,
        });
        CTRL.add(CONFIG, 'spread', 10, 180, 1).name('Spread (deg)').onChange(RESTYLE);
        CTRL.add(CONFIG, 'proximity', 10, 180, 1).name('Active Proximity (px)').onChange(RESTYLE);
        CTRL.add(CONFIG, 'gap', 10, 100, 1).name('Gap (px)').onChange(RESTYLE);
        CTRL.add(CONFIG, 'blur', 0, 50, 1).name('Blur (px)').onChange(RESTYLE);
        CTRL.add(CONFIG, 'opacity', 0, 1, 0.01).name('Inactive Opacity').onChange(RESTYLE);
        CTRL.add(CONFIG, 'vertical').name('Vertical Layout').onChange(RESTYLE);

        RESTYLE();
        UPDATE(new PointerEvent('pointermove', { clientX: 0, clientY: 0 }));

        return () => {
            document.body.removeEventListener('pointermove', UPDATE);
        };
    }, []);

    return (
        <div className="container">
            <article>
                <div className="glows"></div>
                <span className="header">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {/* Add other SVGs here */}
                </span>
                <span className="badge">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258c.94-.236 1.674-.97 1.91-1.91l.258-1.036A.75.75 0 0118 1.5zM15.75 12a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zM21.75 18a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM12 15.75a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {/* Add other SVGs here */}
                </span>
                <span className="title">Example Title</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus et sem sit
                    amet pulvinar. Vestibulum dapibus risus nec erat euismod, vel scelerisque sapien
                    volutpat. Phasellus ut massa ac quam laoreet tristique.
                </p>
            </article>
            {/* Add more articles here */}
        </div>
    );
}
