import styles from './DeviceScreen.module.scss';

export default function DeviceScreen({
  children,
}) {
  return (
    <div className={styles.window}>
      <div className={styles.screen}>
        {children}
      </div>
    </div>
  );
}