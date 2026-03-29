import React, { use } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ modelsPromise, Cards, setCards }) => {
  const getModels = use(modelsPromise);

 

  return (
    <div className="container mx-auto space-y-5 py-10">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-bold ">Choose Your AI Models</h1>
        <p>One Subscription give You Access to All Frontier Ai Models</p>
      </div>
      <div className="grid grid-cols-3 items-center justify-between gap-3 py-5">
        {getModels.map((model) => (
          <ModelsCard
            key={model.id}
            model={model}
            Cards={Cards}
            setCards={setCards}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
