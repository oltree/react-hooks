import styles from './styles.css';

export const Button = ({ onClick, ...props }) => {
  console.log('rerender button');

  return (
    <button
      {...props}
      className={styles.button}
      onClick={() => onClick(props.children)}
    />
  );
};
