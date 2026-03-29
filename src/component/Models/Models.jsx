import React, { use } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ modelsPromise }) => {
  const getModels = use(modelsPromise);

  console.log(getModels);

  return (
    <div className="container mx-auto space-y-5">
      <div className="flex items-center justify-center gap-8 py-10">
        <button className="btn btn-xs bg-amber-400 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl">
          Models
        </button>
        <button className="btn btn-xs bg-amber-400 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl">
          Cart (0)
        </button>
      </div>
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-bold ">Choose Your AI Models</h1>
        <p>One Subscription give You Access to All Frontier Ai Models</p>
      </div>
      <div className="grid grid-cols-3 items-center justify-between gap-3 py-5">
            {
                getModels.map(model => <ModelsCard key={model.id} model={model} />)
            }
      </div>
    </div>
  );
};

export default Models;
