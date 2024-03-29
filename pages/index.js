import useTypeWriter from 'hooks/useTypeWriter.ts';

import styles from './Home.module.scss';

export default function Home() {
  const sentences = [
    { text: 'Hello there!', transitionDelay: 1500 }, // set to good morning/afternoon/evening
    { text: `I'm J.P., and I'm fluent in code c:`, transitionDelay: 2000 },
  ];
  const text = useTypeWriter(sentences);

  // core tenants
  // reusability/performance/usability
  return (
    <div className={styles.home}>
      <div className={styles.window}>
        <div className={styles.console}>
          <h2 className={styles.typeWriter}>
            {text}
            <span className={styles.textCursor} />
          </h2>
        </div>
      </div>
      {/* <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link> */}
    </div>
  )
}
