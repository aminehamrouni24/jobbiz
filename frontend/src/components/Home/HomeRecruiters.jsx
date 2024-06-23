import React from "react";
import happyPeople from "../assets/media/happyRecruiters.svg";
import { Link } from "react-router-dom";

function HomeRecruiters() {
  return (
    <div className="md:flex px-7 md:px-10 py-8 font-Poppins">
      <div className="md:w-1/2 px-3 md:px-16">
        <div>
          <p className="text-xl font-medium">BESOIN DE TALENTS ?</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold md:mr-28 my-7">
            Pourquoi les recruteurs nous aiment
          </h3>
        </div>

        <div className="flex flex-col gap-8 text-left">
          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128716b37e63bb_Team.svg" />
            <p>
              <span className="font-semibold">+10 Milles </span>
              des candidats réceptifs et prêts à démarrer, avec toutes les
              informations dont vous avez besoin pour les évaluer
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128708fd7e63b6_Settings.svg" />
            <p>
              Tout ce dont vous avez besoin pour donner un coup de fouet à votre
              recrutement - des offres d'emploi, une image de marque de
              l'entreprise et des outils de gestion des ressources humaines,
              l'image de marque de l'entreprise et les outils de ressources
              humaines
              <span className="font-semibold"> 10 minutes, gratuitement</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287316a7e63c1_Template.svg" />
            <p>
              A free
              <span className="font-semibold">
                système de suivi des candidats,
              </span>
              ou l'intégration gratuite à tout système de gestion de la demande
              que vous utilisez déjà
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p>
              De plus, nous pouvons nous charger de la sélection pour vous !
              Avec <u>Précision</u>, nous examinons les meilleurs talents
              technologiques du monde et nous vous présentons directement les
              candidats deux fois par semaine.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="my-10">
          <Link to="/login">
            <button className="border border-gray-300 text-black font-medium py-2 px-5 rounded-xl md:shadow hover:bg-green-300 hover:border-green-500 duration-500 mr-5 md:hover:scale-105">
              En savoir plus
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-black text-white font-medium py-2 px-5 rounded-xl  hover:bg-green-700 duration-500 md:hover:scale-105 md:shadow">
              S'inscrire maintenant
            </button>
          </Link>
        </div>
      </div>
      {/* Right */}

      <div className="md:w-1/2">
        <div className="sm:p-20 md:p-0">
          <img src={happyPeople} className="md:w-11/12" />
        </div>
      </div>
    </div>
  );
}

export default HomeRecruiters;
