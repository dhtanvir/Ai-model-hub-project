import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/NavBar/Navbar";
import Models from "./component/Models/Models";
import CardsDetails from "./component/Models/CardsDetails";


const getModelsData = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const [menuData, setMenuData] = useState([]);

  const [activeTab, setActiveTab] = useState("model");

  const [Cards, setCards] = useState([]);
  // console.log(Cards);

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
        {/* name of each tab group should be unique */}
        <div className="container mx-auto">
          <div className="tabs tabs-box  justify-center gap-5 py-2">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab  px-8 py-3 rounded-lg  "
              aria-label="Models"
              onClick={() => setActiveTab("model")}
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab  px-8 py-3 rounded-lg  "
              aria-label={`Cards (${Cards.length})`}
              onClick={() => setActiveTab("card")}
            />
          </div>
        </div>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-primary"></span>
          }
        >
          {activeTab === "model" ? (
            <Models
              modelsPromise={modelsPromise}
              Cards={Cards}
              setCards={setCards}
            />
          ) : null}

          {activeTab === "card" ? (
            <CardsDetails Cards={Cards} setCards={setCards} />
          ) : null}
        </Suspense>
      </main>
      <Footer menuData={menuData} />
    </>
  );
}

export default App;
