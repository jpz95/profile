import Link from 'next/link';

import useHref from 'hooks/useHref.ts';

import styles from './Home.module.scss';
import DeviceScreen from 'components/DeviceScreen';

export default function Home() {
  const desktopApps = [
    {
      name: 'about',
      icon: '',
      link: useHref('/about'),
    }
  ];

  return (
    <DeviceScreen>
      <main className={styles.desktop}>
        <div className={styles.banner}>
          {/* TODO: attach some welcome message with a nice background (carousel?) */}
          <div className={styles.bannerImg}>some img</div>
        </div>
        <div className={styles.desktopAppContainer}>
          {desktopApps.map(app => (
            <Link
              key={app.name}
              href={app.link.href}
              as={app.link.hrefOnHost}
              passHref
              >
              <div className={styles.desktopApp}>
                <span className={styles.appIcon}></span>
                <span className={styles.appName}>{app.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </DeviceScreen>
  );
}
