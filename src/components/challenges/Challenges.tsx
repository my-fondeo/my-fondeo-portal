import { ChallengeCardLanding } from "@components/landing/ChallengeCardLanding";
import { ChallengesTable } from "./ChallengesTable";
import { useState } from "react";
import { useProLanding } from "@core/store/landing/challengeType";

export const Challenges = () => {
  const [proActivate, setProActivate] = useState(false);
  const { setEnabled } = useProLanding();

  return (
    <div className="flex flex-col items-center">
      <div data-aos="fade-right">
        <h1 className="text-5xl font-bold">Desafío de Trading Deportivo.</h1>
        <h3 className="text-3xl font-semibold">En tus términos.</h3>
        <span className="block text-[1.5rem] mt-2 font-normal">
          <strong>¿Más accesible o más intenso?</strong> ¡Adapta nuestro Desafío
          MyFondeo a tu nivel!
        </span>
      </div>
      <div className="flex justify-center items-center gap-10 mt-28">
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
      <ChallengesTable />
    </div>
  );
};
