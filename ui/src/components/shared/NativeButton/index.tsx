import styles from './NativeButton.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const NativeButton = (props: ButtonProps) => {
  return (
    <button className={styles.nativeButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export { NativeButton };
export default NativeButton;