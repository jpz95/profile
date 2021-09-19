import Link from 'next/link';

import useTypeWriter from 'hooks/useTypeWriter.ts';
import useHref from 'hooks/useHref.ts';

import styles from './Intro.module.scss';

export default function Intro() {
  const sentences = [
    { text: 'Hello there!', transitionDelay: 1500 }, // set to good morning/afternoon/evening
    { text: `I'm J.P., and I'm fluent in code c:`, transitionDelay: 2000 },
  ];
  const text = useTypeWriter(sentences);

  const homeHref = useHref('/home');

  // core tenants
  // reusability/performance/usability
  return (
    <div className={styles.intro}>
      <div className={styles.window}>
        <div className={styles.console}>
          <h2 className={styles.typeWriter}>
            {text}
            <span className={styles.textCursor} />
          </h2>
          <Link href={homeHref.href} as={homeHref.hrefOnHost}>
            <button className={styles.button}>Come learn more!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
