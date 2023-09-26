import styles from './RandomButton.module.css';

const RandomButton = (props) => {
    const { getRandom } = props

    return (
        <button className={styles.randomButton} onClick={() => getRandom()}>
            Random
        </button>
    )
}

export default RandomButton
