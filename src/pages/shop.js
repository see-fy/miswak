import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Shop() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl h-screen pt-24 px-4  mx-auto items-center flex flex-col justify-center">
        <div className="items-center flex flex-col justify-center space-y-7">
          <h1 className="font-serif text-4xl font-bold">
            Bonjour à tous nos clients,
          </h1>
          <p className="text-center">
            Nous sommes actuellement en train de travailler sur la construction
            de cette pour vous offrir une expérience d'achat. Nous sommes
            désolés pour tout inconvénient que cela pourrait vous causer, mais
            soyez assuré que nous travaillons dur pour terminer la page dès que
            possible.
          </p>

          <p className="text-center">
            En attendant, si vous souhaitez acheter nos produits Miswak, vous
            pouvez nous contacter par téléphone pour passer votre commande. Nous
            nous ferons un plaisir de vous aider à choisir les produits les
            mieux adaptés à vos besoins.
          </p>
          <p className="text-center">
            Merci pour votre patience et votre compréhension.
          </p>
        </div>
        <div className="flex items-center justify-center my-10">
          <a
            href="https://api.whatsapp.com/send?phone=221772405417"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-700 text-white cursor-pointer  p-3 text-center rounded-lg font-semibold text-xs"
          >
            Nous joindre ici
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
