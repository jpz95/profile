import classnames from 'classnames';

import styles from './DeviceScreen.module.scss';

export default function DeviceScreen({
  children,
  classNames = {}
}) {
  return (
    <div className={classnames(classNames.window, {
      [styles.window]: !classNames.window,
    })}>
      <div className={classnames(classNames.screen, {
        [styles.screen]: !classNames.screen,
      })}>
        {children}
      </div>
    </div>
  );
}