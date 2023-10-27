import styles from './Menu.module.css';

export const Menu = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>

                <h2>Lorem ipsum dolor sit amet.</h2>
                <a className={styles.navbarBrand} href="/#">
                    <img src="images/logo.png" alt="28" />
                </a>

                <button></button>
            </div>
        </nav>
    )
}