import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Section Héros */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Plateforme intelligente pour les agriculteurs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={styles.subtitle}
        >
          Ma Parcelle aide les agriculteurs et les coopératives à gérer leurs
          parcelles, suivre les cultures et planifier leurs activités agricoles
          facilement.
        </motion.p>
      </section>

      {/* Section Fonctionnalités */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>🌾 Gestion des parcelles</h3>
          <p>Suivi précis de toutes vos exploitations agricoles.</p>
        </div>

        <div style={styles.card}>
          <h3>📊 Suivi des cultures</h3>
          <p>Analyse des productions et rendements pour mieux planifier.</p>
        </div>

        <div style={styles.card}>
          <h3>👨‍🌾 Coopératives</h3>
          <p>Gérez les membres et la production de votre coopérative.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    background: "linear-gradient(135deg,#2E7D32,#66BB6A)",
    color: "white",
  },
  subtitle: {
    maxWidth: "700px",
    margin: "20px auto 0 auto",
    fontSize: "18px",
    lineHeight: "1.6",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "50px 20px",
  },
  card: {
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    background: "white",
    textAlign: "center",
  },
};