import React from "react";
import happyPeople from "../assets/media/happy.svg";
import { Link } from "react-router-dom";

function JobSeekers() {
  return (
    <div className="md:flex px-5 md:px-10 py-20 md:py-32 font-Poppins">
      <div className="md:w-1/2">
        <div className="sm:p-20 md:p-0">
          <img src={happyPeople} className=" md:w-11/12" />
        </div>
      </div>

      {/* Right */}
      <div className="md:w-1/2 px-5 md:px-16">
        <div>
          <p className="text-xl font-medium my-10">VOUS AVEZ DU TALENT ?</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold mr-4 md:mr-20 my-7 ">
            Pourquoi les demandeurs d'emploi nous aiment
          </h3>
        </div>

        <div className="flex flex-col gap-8 text-left">
          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" />
            <p>
              Des emplois uniques à{" "}
              <span className="font-semibold">démarrage</span> et
              <span className="font-semibold">
                {" "}
                entreprises technologiques
              </span>{" "}
              que vous ne trouverez nulle part ailleurs
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg" />
            <p>
              Dites adieu aux lettres de motivation - votre profil est tout ce
              dont vous avez besoin.
              <span className="font-semibold">
                {" "}
                Un seul clic pour postuler
              </span>{" "}
              et vous avez terminé.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" />
            <p>
              Tout ce qu'il faut savoir pour chercher un emploi - y compris voir
              <span className="font-semibold"> salaires</span> et
              <span className="font-semibold">
                {" "}
                options d'achat d'actions
              </span>{" "}
              en amont lors de la recherche
            </p>
          </div>

          <div className=" flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg" />
            <p>
              Se connecter directement avec
              <span className="font-semibold"> fondateurs</span> dans les
              meilleures entreprises en démarrage - aucun recruteur tiers n'est
              autorisé
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
    </div>
  );
}

export default JobSeekers;
