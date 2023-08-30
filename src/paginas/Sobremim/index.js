import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png' 
import fotoSobreMim from 'assets/sobre-mim-foto.jpg'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, 
            </h3>

            <img 
                src={fotoSobreMim}
                alt='Foto conteudo sobre mim'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                paragráfo....
            </p>
        </PostModelo>
    )
}