import styles from './Bannner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha-foto.jpg'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    lorem ipsun lalalala alalala sd ads asd sadsadsdda dasdsdsa sad sdsdasdaas sd sadsdsa dsa dfjdfdfdsffds sdasdasdsa dasdsad sas  sad sadsa d d.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Circulo colorido"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Luma"
                />
            </div>
        </div>
    )
}