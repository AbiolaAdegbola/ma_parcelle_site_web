import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home(){

return(

<div>

<Navbar/>

<section style={styles.hero}>

<motion.h1
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

Plateforme intelligente pour les agriculteurs

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
>

Gérez vos parcelles, cultures et coopératives
facilement grâce à Ma Parcelle.

</motion.p>

<button style={styles.button}>
Connexion avec Google
</button>

</section>


<section style={styles.features}>

<div style={styles.card}>
<h3>🌾 Gestion des parcelles</h3>
<p>Suivi précis de vos exploitations agricoles.</p>
</div>

<div style={styles.card}>
<h3>📊 Suivi des cultures</h3>
<p>Analyse des productions et rendements.</p>
</div>

<div style={styles.card}>
<h3>👨‍🌾 Coopératives</h3>
<p>Gestion des producteurs et organisations.</p>
</div>

</section>

<Footer/>

</div>

)

}

const styles={

hero:{
textAlign:"center",
padding:"100px 20px",
background:"linear-gradient(135deg,#2E7D32,#66BB6A)",
color:"white"
},

button:{
marginTop:"30px",
padding:"14px 30px",
fontSize:"16px",
background:"white",
color:"#2E7D32",
border:"none",
borderRadius:"8px",
cursor:"pointer"
},

features:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
padding:"50px"
},

card:{
padding:"30px",
borderRadius:"12px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}

}