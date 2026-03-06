import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy(){

return(

<div>

<Navbar/>

<div style={styles.container}>

<h1>Politique de confidentialité</h1>

<p>
Ma Parcelle protège les données de ses utilisateurs.
</p>

<h2>Données collectées</h2>

<ul>
<li>Nom</li>
<li>Email</li>
<li>Photo</li>
</ul>

<h2>Utilisation</h2>

<p>
Les données servent uniquement à l'identification
des utilisateurs dans l'application.
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