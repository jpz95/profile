import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.window}>
        <div className={styles.screen}>
          <main className={styles.desktop}>
            <span className={styles.desktopApp}>
              <span className={styles.appIcon}></span>
              <span className={styles.appName}>my app</span>
            </span>
          </main>
        </div>
      </div>
    </div>
  );
}
