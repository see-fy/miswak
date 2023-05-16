import React from "react";
import cover3 from "../assets/cover3.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Body() {
  const navigate = useNavigate();
  let style = {
    backgroundImage: "url(" + cover3 + ")",
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl px-4 pt-24 mx-auto">
        <div
          style={style}
          className="w-full h-[24rem]  bg-no-repeat bg-cover pl-20 flex flex-col items-center justify-center space-y-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
        >
          <h1 className="text-white font-serif text-4xl font-bold">
            Revendeurs
          </h1>
          <p className="text-white">Appel à tous les vendeurs en détail.</p>
        </div>
        <div className="my-10 space-y-5">
          <h1 className="text-center text-4xl font-bold">
            A tous les Revendeurs en detail
          </h1>
          <p className="text-center">
            Merci de votre intérêt pour devenir un distributeur de Miswak.
          </p>
          <p className="text-center">
            Souhaitez-vous stocker notre produit pour votre distribution ?
          </p>
          <p className="text-center">
            Si vous êtes intéressé par la vente en gros de Miswak, obtenir un
            devis ou passer une commande, il vous suffit de remplir le
            formulaire à la page contact et nous vous contacterons pour discuter
            de vos besoins.
          </p>
          <p className="text-center">Nous avons hâte de vous entendre.</p>
        </div>
        <div className="flex items-center justify-center my-10">
          <button
            onClick={() => navigate("/contact")}
            className="bg-slate-700 text-white cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
          >
            Contactez nous ici
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
