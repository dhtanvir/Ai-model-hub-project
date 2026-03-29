import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Card = ({ Cards, setCards }) => {
  //   console.log(Cards);
  const totalPrice = Cards.reduce((sum, card) => sum + card.price, 0);
  // console.log(totalPrice);

  const handleCheckOut = () => {
    setCards([]);
    toast.warning(" Proceed to Checked Out!");
  };

  const handleDelete = (card) => {
    const upGetCards = Cards.filter((c) => c.id !== card.id);
    setCards(upGetCards);
    toast.warning(" Subscribed Deleted Successfully!");
  };

  return (
    <div className="py-10 container mx-auto space-y-8">
      {/*  */}
      <div>
        <h1 className="text-5xl font-bold ">Your Cart </h1>

        {Cards.length === 0 ? (
          <h1 className=" text-2xl text-center"> No Cards Available </h1>
        ) : (
          <>
            {/* card */}
            <div>
              {Cards.map((card) => (
                <div key={card.id}>
                  <div className="bg-white rounded-2xl p-5 shadow-lg flex items-center justify-between gap-5 mt-5">
                    <div className="flex items-center gap-2">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-10 h-10"
                      />
                      <div>
                        <h3 className="text-2xl text-black font-bold">
                          {card.title}
                        </h3>
                        <p className="text-gray-500">{card.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-10">
                      <h5 className="text-2xl font-bold text-black ">
                        ${card.price}
                        <samp className="text-base text-gray-400">/month</samp>
                      </h5>

                      <button
                        onClick={() => handleDelete(card)}
                        className="btn bg-red-400 rounded-lg cursor-pointer"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Total */}
              <div className="w-full bg-black rounded-2xl flex items-center justify-between gap-5 px-5 py-5  mt-8">
                <h4 className="text-2xl font-bold text-amber-50 ">Total</h4>
                <h4 className="text-2xl font-bold text-red-400">
                  $ {totalPrice}
                </h4>
              </div>
              <button
                onClick={handleCheckOut}
                className=" w-full bg-red-600 text-white py-3 rounded-lg mt-8"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
