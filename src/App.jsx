import "./App.css";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner/>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
