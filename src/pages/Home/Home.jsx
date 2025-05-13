import styles from "./Home.module.css";
import Navbar from "../../componenet/Navbar/Navbar";
import Main from "../../componenet/Main/Main";
import Footer from "../../componenet/Footer/Footer";

function Home() {
  return (
    <div className={styles.home}>

   <Navbar/>
   <Main/>
   <Footer/>
   
    </div>
  )
}

export default Home;
