import styles from './Prices.module.css';

export const Prices = () => {
    return <section id='prices' className={styles.price}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Pro</h1></div>                            <div className={styles.cardBody}>
                            <h2>$ 9,99</h2>
                            <p>Lorem, ipsum dolor.</p>
                            <button className={styles.btn}>Lorem, ipsum.</button>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Pro</h1></div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textMuted}>$ 9,99</h2>
                            <p>Lorem, ipsum dolor.</p>
                            <p>Lorem, ipsum dolor.</p>
                            <button className={styles.btn}>Lorem, ipsum.</button>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Premium</h1></div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textMuted}>$ 9,99</h2>
                            <p>Lorem, ipsum dolor.</p>
                            <p>Lorem, ipsum dolor.</p>
                            <button className={styles.btn}>Lorem, ipsum.</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
};