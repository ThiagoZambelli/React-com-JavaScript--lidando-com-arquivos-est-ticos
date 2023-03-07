import Tags from '../Tags';
import styles from './Galeria.module.scss';
import imagens from './fotos.json';
import Cards from './Cards';
import { useState } from 'react';

export default function Galeria() {
  const [fotos, setFotos] = useState(imagens);
  const tags = [...new Set(imagens.map((valor) => valor.tag))];

  const filtraFotos = (tag)=>{
    const novasFotos = imagens.filter((foto)=>{
      return foto.tag === tag;
    });
    setFotos(novasFotos);
  }
  
  return (
    <section className={styles.galeria}>      
      <h2>Navegue pela galeria</h2>
      <Tags 
        tags={tags}
        filtraFotos={filtraFotos}
        setFotos={setFotos}
      />
      <Cards fotos={fotos} styles={styles} />
    </section>
  )
}
