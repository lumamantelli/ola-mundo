import styles from './PostModelo.module.css'

export default function PostModelo({ children, fotoCapa, titulo }) {
    return (
        <article>
            <div
                className={styles.postModeloContainer}
                style={{
                    backgroundImage: `url(${fotoCapa})`
                }}
            ></div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}