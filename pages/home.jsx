import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.window}>
        <div className={styles.screen}>
          <main className={styles.desktop}>
            <div className={styles.banner}>
              {/* TODO: attach some welcome message with a nice background (carousel?) */}
              <div className={styles.bannerImg}>some img</div>
            </div>
            <div className={styles.desktopAppContainer}>  
              <span className={styles.desktopApp}>
                <span className={styles.appIcon}></span>
                <span className={styles.appName}>About</span>
              </span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
