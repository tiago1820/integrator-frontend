import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    const year = new Date().getFullYear();

    return <section className={styles.footer}>
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href=""><FaFacebook size={30} /></a>
                    <a href=""><FaTwitter size={30} /></a>
                    <a href=""><FaInstagram size={30} /></a>
                    <a href=""><FaLinkedin size={30} /></a>
                </li>
            </ul>
        </div>
        <a href="mailto:tiago.zdo@gmail.com">tiago.zdo@gmail.com</a>
        <p>Desarrollado por Tiago de Oliveira - {year}</p>
    </section>
}