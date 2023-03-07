import logo from './logo.png';
import search from './search.png';
import style from './Cabecalho.module.scss'


export default function Cabecalho(){
    return(
        <header className={style.cabecalho}>
            <img src={logo} alt="Logo Alura Space" />
            <div className={style.cabecalho__container}>
                <input className={style.cabecalho__input} type="search"  placeholder="O que você busca?"/>
                <img src={search} alt="Icone de Lupa" />
            </div>
        </header>
    )
}