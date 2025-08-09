import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>
          VideCut
        </h1>
        <p className={styles.description}>
          Corte vídeos automaticamente com IA
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>🎬 Upload de Vídeo</h2>
          <p>Cole o link do YouTube, Instagram ou TikTok</p>
        </div>

        <div className={styles.card}>
          <h2>✂️ Cortes Automáticos</h2>
          <p>IA identifica os melhores momentos automaticamente</p>
        </div>

        <div className={styles.card}>
          <h2>📱 Formatos Otimizados</h2>
          <p>45s, 60s e 75s - perfeito para redes sociais</p>
        </div>

        <div className={styles.card}>
          <h2>🔤 Legendas em PT</h2>
          <p>Adiciona legendas em português automaticamente</p>
        </div>
      </div>
    </main>
  )
}
