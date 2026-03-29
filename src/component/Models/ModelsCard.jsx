import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelsCard = ({ model, Cards, setCards }) => {
 

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);

    const isAlreadySubscribed = Cards.find((card) => card.id === model.id);

    if (isAlreadySubscribed) {
      toast.warning(" You have already Subscribed to this model!");
      return;
    }

    setCards([...Cards, model]);

    toast.success(" Subscribed Successfully!");
  };

  return (
    <div>
      <div className="card bg-white  shadow-lg rounded-xl ">
        <figure className="bg-zinc-200 p-5">
          <img
            src={model.image}
            alt={model.title}
            className="w-full  h-48 object-contain  rounded-lg "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-black">
            {model.title}
          </h2>
          <p className="text-balance text-black">{model.description}</p>
          <div>
            <p className="text-3xl font-bold text-black">
              ${model.price.toFixed(2)}
              <samp className="text-base text-gray-400">/month</samp>{" "}
            </p>
          </div>
        </div>

        <div className="px-5 pb-8">
          <button className="btn btn-primary w-full " onClick={handleSubscribe}>
            {isSubscribed ? "Subscribe" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;
