import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    const year = new Date().getFullYear();

    return <section id='footer' className={styles.footer}>
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href=""><FaFacebook className={styles.facebook} size={30} /></a>
                    <a href=""><FaTwitter className={styles.linkedin} size={30} /></a>
                    <a href=""><FaInstagram className={styles.instagren} size={30} /></a>
                    <a href=""><FaLinkedin className={styles.twitter} size={30} /></a>
                </li>
            </ul>
        </div>
        <a className={styles.contacto} href="mailto:tiago.zdo@gmail.com">tiago.zdo@gmail.com</a>
        <p>Desarrollado por Tiago de Oliveira - {year}</p>
    </section>
}