import iFB from './facebook.svg';
import iIG from './instagram.svg';
import iTW from './twitter.svg';
import styles from './Footer.module.scss'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <nav className={styles.footer__nav}>
                <a href="#"><img src={iFB} alt="Icone FaceBook" /></a>
                <a href="#"><img src={iTW} alt="Icone Twitter" /></a>
                <a href="#"><img src={iIG} alt="Icone Instagram" /></a>
            </nav>
            <p className={styles.footer__copyright}>&#169; Desenvolvido por <a className={styles.footer__a} href="https://www.linkedin.com/in/thiagozambelli">Thiago Zambelli</a></p>
        </footer>
    )
}