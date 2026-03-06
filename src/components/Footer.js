import { Link } from "react-router-dom";

export default function Footer() {

return(

<div style={styles.footer}>

<p>© 2026 Ma Parcelle</p>

<div>

<Link to="/privacy" style={styles.link}>
Politique de confidentialité
</Link>

<Link to="/terms" style={styles.link}>
Conditions
</Link>

</div>

</div>

)

}

const styles={

footer:{
marginTop:"60px",
padding:"20px",
display:"flex",
justifyContent:"space-between",
borderTop:"1px solid #eee"
},

link:{
marginLeft:"20px",
textDecoration:"none",
color:"#2E7D32"
}

}