import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <div className="w-full  md:flex items-center justify-center  bg-slate-100 h-full px-4 py-10">
      <div className=" flex max-w-xl items-end justify-end p-20">
        <img
          src={require("../assets/logo_footer.png")}
          alt="Logo"
          className=" rounded-sm h-40 invert"
        />
      </div>
      <div className="flex items-center justify-center border-l-2 border-black max-w-xl p-2">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl">Contactez nous</h1>
          <p>
            Envoyer nous un email à tout moment pour vos questions,
            commentaires, et plaintes.
          </p>
          <div className="flex space-x-2 items-center">
            <a href={`https://www.gmail.com/`} target="_blank" rel="noreferrer">
              <HiMail className="cursor-pointer -mb-1" size={16} />
              <i class="fab hi-mail"></i>
            </a>
            <p className=" cursor-pointer hover:underline">
              miswaksn@gmail.com
            </p>
          </div>

          <h1 className="font-bold">
            Soyez à jour avec nos pour connaitre nos nouvetés en nous suivant
            sur les réseaux sociaux.{" "}
          </h1>
          <div className="flex space-x-2 items-center">
            <a
              href={`https://www.twitter.com/miswaksn`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="cursor-pointer -mb-1" size={16} />
              <i class="fab fa-twitter"></i>
            </a>
            <p className="cursor-pointer hover:underline">@miswaksn</p>
          </div>
          <div className="flex space-x-2 items-center">
            <a
              href={`https://www.instagram.com/miswaksn`}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="cursor-pointer -mb-1" size={16} />
              <i class="fab fa-instagram"> </i>
            </a>
            <p className="cursor-pointer hover:underline">@miswaksn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
