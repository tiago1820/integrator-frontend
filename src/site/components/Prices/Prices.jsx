import styles from './Prices.module.css';

export const Prices = () => {
    return <section id='prices' className={styles.price}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <h1>Planes y Precios</h1>
                    <p>Comienza tu prueba gratuita. No se requiere tarjeta de crédito.</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Free</h1></div>                            <div className={styles.cardBody}>
                            <h2>$ 0,00</h2>
                            <p>Hasta 5 personajes como favoritos</p>
                            <p>Sin soporte técnico</p>
                            <button className={styles.btn}>Suscríbase ahora</button>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Pro</h1></div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textMuted}>$ 4,99</h2>
                            <p>Hasta 25 personajes como favoritos.</p>
                            <p>Soporte técnico por correo electrónico.</p>
                            <button className={styles.btn}>Suscríbase ahora</button>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Premium</h1></div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textMuted}>$ 9,99</h2>
                            <p>Favoritos ilimitados.</p>
                            <p>Soporte Técnico por teléfono.</p>
                            <button className={styles.btn}>Suscríbase ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};