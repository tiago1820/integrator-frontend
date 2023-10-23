import styles from './RandomButton.module.css';

export const RandomButton = (props) => {
    const { getRandomChar } = props;

    return (
        <button className={styles.RandomButton} onClick={() => getRandomChar()}>
            Random
        </button>
    )
}