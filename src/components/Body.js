import React from "react";
import cover1 from "../assets/cover1.png";
import cover4 from "../assets/cover4.png";
import stock from "../assets/stock_siwak.png";
import product from "../assets/product_siwak.png";
import refill from "../assets/refill_siwa.png";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  let style = {
    backgroundImage: "url(" + cover1 + ")",
  };
  let drop = {
    backgroundImage: "url(" + cover4 + ")",
  };
  const renderCard = (url, title, bio) => {
    return (
      <div className=" h-96 max-w-sm rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-2xl mx-auto space-y-4">
        <img src={url} alt="" className="h-24 w-24" />
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs text-center">{bio}</p>
      </div>
    );
  };
  const renderUse = (x, y, z) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-5 ">
        <div className="h-10 w-10 text-center rounded-full border-black flex items-center justify-center border-2 ">
          {x}
        </div>
        <p className="text-center">{y}</p>
        <p className="text-center">{z}</p>
      </div>
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24">
      <div
        style={style}
        className="w-full h-[24rem]  bg-no-repeat bg-cover pl-20 flex flex-col items-start justify-center space-y-3 rounded-tr-2xl rounded-br-2xl"
      >
        <h1 className="text-white font-serif text-4xl font-bold">
          Avec Miswak
        </h1>
        <p className="text-white">une bonne haleine selon votre gôut</p>
        <p className="text-white">des dents éclatantes et en bonne santé</p>
        <p className="text-white">
          obtenez l'équivalent de la brosse à dent et du dentifrice et des files
          dentaires.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-white text-black cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
        >
          Commander
        </button>
      </div>
      <div className="my-10 space-y-5">
        <h1 className="text-center text-3xl font-bold">
          Optez pour un produit respectueux de l'environnement grâce à Miswak.
        </h1>
        <p className="text-center text-sm">
          Miswak est un produit d'hygiène bucco-dentaire écologique et efficace,
          fabriqué à partir de fibres naturelles issues d'arbre collectés avec
          la plus grande précaution. Contrairement aux dentifrices
          traditionnels, Miswak ne nécessite pas l'utilisation de dentifrice. Ce
          produit vous offre non seulement une alternative plus respectueuse de
          l'environnement, mais également des avantages sanitaires
          significatifs.
        </p>
      </div>
      <div className="grid grid-cols-1 space-y-5 lg:grid-cols-3 my-10 w-full">
        {renderCard(
          "https://toothwak.co.uk/wp-content/uploads/2020/10/1_Natural-Icon.png",
          "Naturel",
          "Notre produit est fabriqué à partir de racines et de branches naturelles d'arbre, sans aucun ajout de produits chimiques agressifs ou de fibres synthétiques. Vous pouvez ainsi utiliser notre produit en toute confiance, sans craindre les effets néfastes sur votre santé ou sur l'environnement. En plus il est imprégné d'agents antibactériens et d'arômes à votre goût.."
        )}

        {renderCard(
          "https://toothwak.co.uk/wp-content/uploads/2020/10/1_Convenience.png",
          "Confort et praticité",
          "Plus besoin d'eau ou de dentifrice ! Notre brosse à dents pratique peut être utilisée à tout moment et n'importe où. Glissez-la simplement dans votre sac et sortez-la quand vous en avez besoin. Conçue ergonomiquement pour une utilisation facile, cette brosse à dents est le compagnon idéal pour les déplacements ou pour une utilisation quotidienne."
        )}

        {renderCard(
          "https://toothwak.co.uk/wp-content/uploads/2020/10/1_History-Culture.png",
          "Histoire et culture",
          "Le Miswak est connu comme étant la plus ancienne brosse à dents de l'histoire. Il est utilisé dans les régions asiatiques, le Moyen-Orient et l'Afrique du Nord, et devient lentement de plus en plus populaire dans l'ouest en raison de ses avantages scientifiques et de ses facteurs écologiques!. Utilisé depuis l'Antiquité pour ses propriétés curatives et antibactériennes."
        )}
      </div>
      <div className="flex items-center justify-center my-10">
        <button
          onClick={() => navigate("/about")}
          className="bg-slate-700 text-white cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
        >
          En savoir plus
        </button>
      </div>
      <div className="space-y-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">
          Nos produits en vente
        </h1>
        <h4 className="text-center text-sm">Brosse à dent 100% naturelle</h4>
        <p className="text-sm text-center">
          Notre brosse à dents est équipée de poils et d'une manche en bois,
          ainsi que d'agents antibactériens et d'arômes (Menthe, Vanille,
          Fraise, Nature) pour des dents propres, saines et blanches; le tout
          accompagnée d'une bonne haleine.
        </p>
      </div>
      <div className="grid space-y-5 mx-auto items-center justify-center px-auto w-full grid-cols-1 xl:grid-cols-3 my-10 ">
        <img
          src={product}
          alt=""
          className="shadow-xl border-yellow-900 border-4 rounded-xl"
        />
        <img
          src={stock}
          alt=""
          className="shadow-xl border-yellow-900 border-4 rounded-xl mx-auto"
        />
        <img
          src={refill}
          alt=""
          className="shadow-xl border-yellow-900 border-4 rounded-xl"
        />
      </div>
      <div className="flex items-center justify-center my-10">
        <button
          onClick={() => navigate("/shop")}
          className="bg-yellow-300 text-black cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
        >
          Passer une commande
        </button>
      </div>
      <div className="flex flex-col items-center justify-center my-10 space-y-5 p-4">
        <h1 className="text-3xl font-bold">À propos de Miswak :</h1>
        <h4>
          Le changement écologique avec notre brosse à dents naturelle
          remplaçable à tête de siwak...
        </h4>
        <h6>
          La méthode la plus ancienne pour l'hygiène bucco-dentaire a été
          révolutionnée pour répondre à tous vos besoins.
        </h6>
        <p className="text-center">
          Miswak a été conçu en combinant la facilité et le confort d'une brosse
          à dents régulière avec son corps en bois, et les soies naturelles d'un
          siwak. Choisissez Miswak pour votre santé et faites la différence en
          même temps. Changez régulièrement les têtes de soie pour des raisons
          d'hygiène !
        </p>
      </div>
      <div className="flex items-center justify-center my-10">
        <button
          onClick={() => navigate("/about")}
          className="bg-slate-600 text-white cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
        >
          En savoir plus
        </button>
      </div>
      <div className="w-full bg-slate-300 p-10 space-y-7 flex flex-col items-center justify-center my-10 rounded-2xl">
        <h1 className="text-center text-3xl font-bold">
          Comment utiliser le Miswak :
        </h1>
        <p className="text-center text-sm">
          Les têtes de soie(poils en bois) sont facilement attachées et
          détachées ! Nous recommandons de les remplacer tous les mois environ
          pour garantir des résultats optimaux. Il suffit de quelques secondes
          pour les changer.
        </p>
        <div className="grid grid-cols-1 space-y-5 lg:grid-cols-3">
          {renderUse(
            "1",
            "Rincez votre brosse à dents pendant 2 à 3 secondes sous un jet d'eau courante.",
            "Cela permet un brossage facile et active toutes les propriétés nettoyantes naturelles."
          )}
          {renderUse(
            "2",
            "Brossez simplement. Oui, vous n'avez pas besoin de dentifrice...",
            "Les poils de Miswak sont parfaits pour l'hygiène bucco-dentaire."
          )}
          {renderUse(
            "3",
            "Replacez la brosse dans son espace désigné, en vous assurant qu'elle est sèche.",
            "Cela empêche l'accumulation de bactéries et assure que votre brosse à dents durera plus longtemps."
          )}
        </div>
      </div>
 <div
        style={drop}
        className="w-full h-[24rem]  bg-no-repeat bg-cover flex flex-col items-center justify-end space-y-3 rounded-bl-2xl rounded-br-2xl my-20"
      >
<div className="flex items-center justify-center mb-20">
        <button
          onClick={() => navigate("/shop")}
          className="bg-slate-600 text-white cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
        >
          Passer une commande
        </button>
      </div>

</div>
    </div>
  );
}

export default Body;
