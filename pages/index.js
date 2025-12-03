export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="/logo.png"
          alt="Analiz360 Logo"
          style={styles.logo}
        />

        <h1 style={styles.title}>ANALİZ360</h1>
        <p style={styles.subtitle}>Akıllı Maç Analiz Motoru</p>

        <div style={styles.section}>
          <p style={styles.text}>Sistem çalışıyor. Arayüz ve API bağlantıları yapılandırılacak.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    textAlign: "center",
    padding: "40px 20px",
    borderRadius: "12px",
  },
  logo: {
    width: "140px",
    height: "140px",
    marginBottom: "20px",
  },
  title: {
    color: "#fff",
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#ccc",
    fontSize: "18px",
    marginBottom: "30px",
  },
  section: {
    padding: "10px",
  },
  text: {
    color: "#888",
    fontSize: "16px",
  },
};
