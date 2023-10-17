import { memo } from 'react';
import styles from './styles.css';

export const Button = memo(({ onClick, ...props }) => {
  console.log('rerender button');

  return (
    <button
      {...props}
      className={styles.button}
      onClick={() => onClick(props.children)}
    />
  );
});
