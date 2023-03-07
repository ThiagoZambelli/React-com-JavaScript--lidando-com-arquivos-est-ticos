import logo from './logo.png';
import search from './search.png';

export default function Cabecalho(){
    return(
        <header>
            <img src={logo} alt="Logo Alura Space" />
            <div>
                <input type="search"  placeholder="O que você busca?"/>
                <img src={search} alt="Icone de Lupa" />
            </div>
        </header>
    )
}