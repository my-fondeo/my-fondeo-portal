import { ChallengesTable } from "./ChallengesTable";
import { useState } from "react";
import { useProLanding } from "@core/landing/store/challengeType";
import ChallengeCardsSwiper from "./ChallengeCardsSwiper";
import { ChallengeCardLanding } from "@components/landing/ChallengeCardLanding";

export const Challenges = () => {
  const [proActivate, setProActivate] = useState(false);
  const { setEnabled } = useProLanding();

  return (
    <div className="flex flex-col items-center px-4 md:px-4 lg:px-16 pt-28 max-w-screen">
      <div className="text-center">
        <h1 data-aos="fade-right" data-aos-offset="100" className="text-3xl sm:text-4xl lg:text-5xl font-bold">Desafío de Trading Deportivo.</h1>
        <h3 data-aos="fade-right" data-aos-offset="144" className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">En tus términos.</h3>
        <span data-aos="fade-right" data-aos-offset="120" className="block text-base sm:text-lg lg:text-[1.5rem] mt-3 md:mt-8 font-normal max-w-2xl">
          <strong>¿Más accesible o más intenso?</strong> ¡Adapta nuestro Desafío
          MyFondeo a tu nivel!
        </span>
      </div>
      <div className="justify-center items-center gap-10 mt-16 md:flex hidden">
        <ChallengeCardLanding
          changeItem={() => setEnabled(false)}
          items={[
            "Evaluación tradicional",
            "Perdida máxima diaria",
            "Customizables",
            "Objetivo fase 2 más bajo",
          ]}
          popular
        />
        <ChallengeCardLanding
          changeItem={() => setEnabled(true)}
          items={[
            "Sin perdida máxima diaria",
            "Limite beneficio diario",
            "Más asequibles",
            "Objetivo beneficio más bajo",
          ]}
        />
      </div>
      <div className="md:hidden flex justify-center items-center w-screen">
        <ChallengeCardsSwiper/>
      </div>
      <ChallengesTable />
    </div>
  );
};
