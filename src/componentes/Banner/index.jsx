import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function Banner() {
    return (
        <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vita do espaço" />
        </div>
    )
}