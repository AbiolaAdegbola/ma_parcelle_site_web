import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.nav}>

      <h2 style={styles.logo}>🌱 Ma Parcelle</h2>

      <div>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/privacy" style={styles.link}>Privacy</Link>
        <Link to="/terms" style={styles.link}>Terms</Link>
      </div>

    </div>
  );
}

const styles = {

nav:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 40px",
background:"#1B5E20",
color:"white"
},

logo:{
margin:0
},

link:{
marginLeft:"20px",
textDecoration:"none",
color:"white",
fontWeight:"bold"
}

};