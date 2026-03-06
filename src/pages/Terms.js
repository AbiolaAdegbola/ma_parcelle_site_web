import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms(){

return(

<div>

<Navbar/>

<div style={styles.container}>

<h1>Conditions d'utilisation</h1>

<p>
En utilisant Ma Parcelle vous acceptez les conditions suivantes.
</p>

<h2>Utilisation</h2>

<p>
L'application permet la gestion des parcelles agricoles
et des coopératives.
</p>

<h2>Responsabilité</h2>

<p>
Le développeur ne peut être responsable des pertes
liées à l'utilisation de l'application.
</p>

</div>

<Footer/>

</div>

)

}

const styles={

container:{
maxWidth:"900px",
margin:"auto",
padding:"40px",
lineHeight:"1.6"
}

}