import React, { use } from "react";
import { ChallengeLabelItem } from "./ChallengeLabelItem.tsx";

import targetIcon from "../../assets/icon/target.svg?react";
import growingIcon from "../../assets/icon/growing.svg?react";
import minVelIcon from "../../assets/icon/min_vel.svg?react";
import downTradeIcon from "../../assets/icon/down_trade.svg?react";
import clockIcon from "../../assets/icon/clock.svg?react";
import divisionIcon from "../../assets/icon/division.svg?react";
import { useProLanding } from "@core/store/landing/challengeType.ts";

const ChallengeLabels = () => {
  const { isEnabled } = useProLanding();
  const item = isEnabled
    ? {
        label: "Limite Beneficio diario",
        icon: downTradeIcon,
      }
    : {
        label: "Perdida máxima diaria",
        icon: downTradeIcon,
      };

  const challengeLabels = [
    {
      label: "Objetivo beneficios",
      subtitle: "Fase 1",
      icon: targetIcon,
    },
    {
      label: "Objetivo beneficios",
      subtitle: "Fase 2",
      icon: targetIcon,
    },
    { label: "Mínimo Picks", icon: growingIcon },
    {
      label: "Importe máximo operación",
      icon: minVelIcon,
    },
    {
      label: "Importe mínimo operación",
      icon: minVelIcon,
    },
    item,
    {
      label: "Perdida máxima total",
      icon: downTradeIcon,
    },
    {
      label: "Tiempo limite",
      icon: clockIcon,
    },
    {
      label: "División de beneficios",
      icon: divisionIcon,
    },
  ];
  return (
    <div className="my-15 mt-20 ml-auto h-full">
      {challengeLabels.map((item, index) => (
        <ChallengeLabelItem key={index} bgDark={index % 2 === 0} {...item} />
      ))}
    </div>
  );
};

export default ChallengeLabels;
