import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Footer from "../../componentes/Footer";
import Menu from "../../componentes/Menu";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <Footer />
        </>
    )
}