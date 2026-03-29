import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/NavBar/Navbar";
import Models from "./component/Models/Models";

const getModelsData = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const [menuData, setMenuData] = useState([]);

  const modelsPromise = getModelsData();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("menu.json");
      const data = await response.json();

      setMenuData(data);
    };

    getData();
  }, []);

  return (
    <>
      <Navbar menuData={menuData} />
      <main>
        <Banner />
        <Suspense
          fallback={
            <span className="loading loading-spinner text-primary"></span>
          }
        >
          <Models modelsPromise={modelsPromise} />
        </Suspense>
      </main>
      <Footer menuData={menuData} />
    </>
  );
}

export default App;
