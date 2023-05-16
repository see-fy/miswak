import React from "react";
import cover2 from "../assets/cover2.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  const navigate = useNavigate();
  let style = {
    backgroundImage: "url(" + cover2 + ")",
  };
  const renderCard = (url, title, bio) => {
    return (
      <div className=" h-96 max-w-xl rounded-lg p-4 flex flex-col items-center justify-center bg-white shadow-2xl mx-auto space-y-4">
        <img src={url} alt="" className="h-24 w-24" />
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-center">{bio}</p>
      </div>
    );
  };
  const renderUse = (x, y) => {
    return (
      <div className="flex  items-center justify-center space-y-5 ">
        <img src={x} alt="" className="h-16 w-16" />
        <p className="text-sm text-center max-w-sm">{y}</p>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 pt-24">
        <div
          style={style}
          className="w-full h-[24rem]  bg-no-repeat bg-cover  flex flex-col items-center justify-center space-y-3 rounded-tr-2xl rounded-br-2xl"
        >
          <h1 className="text-white font-serif text-4xl font-bold">
            A propos de Miswak
          </h1>
          <p className="text-white">Defilez en bas</p>
          <p className="text-white">Pour en savoir un peu plus sur nous</p>
        </div>
        <div className="my-10 space-y-7">
          <h1 className="text-center text-4xl font-bold">
            Brosse à dents naturelle à tête de siwak remplaçable
          </h1>
          <p className="text-center">
            La plus ancienne méthode d'hygiène bucco-dentaire a été
            révolutionnée pour répondre à tous vos besoins.
          </p>
          <p className="text-center">
            Les professionnels de la santé ont étudié au fil des ans les
            propriétés naturelles et antibactériennes du Miswak, qui est extrait
            des racines et des branches d'arbre. Les recherches montrent que
            lorsqu'il est utilisé correctement, le Miswak est extrêmement
            bénéfique pour votre hygiène bucco-dentaire. Certains de ces
            avantages naturels comprennent l'élimination des bactéries nocives,
            la lutte contre la mauvaise odeur, la réduction de la plaque
            dentaire et le Miswak peut aider à blanchir naturellement les dents,
            parmi de nombreux autres.
          </p>
          <p className="text-center">
            Miswak a été conçu en combinant la simplicité et le confort d'une
            brosse à dents régulière, avec son corps en bois et les poils
            naturels d'un siwak. Choisissez Miswak pour votre santé et faites
            une différence en même temps. Changez régulièrement les têtes de
            brosse pour des raisons d'hygiène!
          </p>
        </div>
        <div className="flex items-center justify-center my-10">
          <button
            onClick={() => navigate("/shop")}
            className="bg-yellow-300 text-black cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
          >
            Passer une commande
          </button>
        </div>
        <div className="grid grid-cols-1 space-y-5 lg:grid-cols-2 my-12">
          {renderCard(
            "https://toothwak.co.uk/wp-content/uploads/2020/10/1_About-Us-icon.png",
            "Quel est le matériau utilisé pour les manches de nos brosses à dents ?",
            "Le corps de la brosse est fabriqué à partir de bois ou de biodégradable - issu d'un arbre de champ - en fonction du modèle que vous choisissez. Le Miswak de luxe est fabriqué à partir de bois doux, qui est tout aussi luxueux que son nom l'indique. Ce type d'arbre est parfait pour la sculpture, ce qui explique pourquoi cette brosse aura l'une des finitions les plus lisses. Les siwaks classiques sont fabriqués à partir de bois de ...."
          )}

          {renderCard(
            "https://toothwak.co.uk/wp-content/uploads/2020/10/1_About-Us-icon-2.png",
            "Si vous ne pouvez pas encore effectuer le changement",
            "Sinon, jetez un coup d'œil à notre poudre dentaire à base de charbon noir désactivé. Ce remède naturel a un effet blanchissant et anti-inflammatoire prononcé qui prévient les maladies des gencives et laisse votre bouche fraîche comme jamais. Les avantages d'utiliser notre poudre par rapport à un dentifrice ordinaire sont infinis. Cette poudre est 100% naturelle et ne contient aucun produit chimique agressif ni de fluorure et dure plus de trois fois le temps d'un dentifrice ordinaire, car une petite quantité suffit..."
          )}
        </div>

        <div className="w-full bg-slate-400 p-10 flex flex-col items-center justify-center my-10 space-y-5 rounded-2xl">
          <h1 className="text-center text-4xl font-bold">
            Guide d'entretien et avertissements
          </h1>
          <p className="text-center">
            Après avoir sorti le produit de son contenant de stockage, les poils
            doivent être trempés dans l'eau pendant 15 minutes initialement afin
            d'augmenter la durée de vie du produit. L'eau active également les
            fibres à l'intérieur du produit.
          </p>
          <div className="">
            {renderUse(
              "https://toothwak.co.uk/wp-content/uploads/2020/10/1_Icon-About-Us.png",
              "Il est recommandé de laver le Siwak avec de l'eau pendant 2 à 3 secondes avant chaque utilisation."
            )}
            {renderUse(
              "https://toothwak.co.uk/wp-content/uploads/2020/10/1_Icon-About-Us-3.png",
              "N'oubliez pas de changer régulièrement les têtes de votre Siwak. Elles peuvent être facilement enlevées en tournant dans le sens anti-horaire."
            )}
            {renderUse(
              "https://toothwak.co.uk/wp-content/uploads/2020/10/1_Icon-About-Us-2.png",
              "Votre Miswak ne doit pas être laissé dans l'eau car cela causera des taches et une détérioration de la qualité du produit."
            )}
          </div>
          <p className="text-center">
            Votre Siwak doit être stocké à sec après utilisation, à découvert.
            La circulation de l'air empêchera l'accumulation de bactéries sur
            votre produit et il doit également être placé loin des autres
            brosses à dents en plastique.
          </p>
          <h3 className="text-center font-semibold">
            Comme la brosse à dents Miswak a des têtes interchangeables,
            veuillez vous assurer de garder votre siwak hors de la vue et de la
            portée des enfants.
          </h3>
        </div>
        <div className="flex items-center justify-center my-10">
          <button
            onClick={() => navigate("/shop")}
            className="bg-yellow-300 text-black cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
          >
            Passer une commande
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
