import Check from "@assets/icon/check.svg?react";
interface Props {
  popular?: boolean;
  items?: string[];
  changeItem: () => void;
}

export const ChallengeCardLanding = ({
  popular,
  items = [],
  changeItem = () => {},
}: Props) => {
  return (
    <div
      className={`rounded-xl md:rounded-2xl p-4 md:p-5 pt-6 md:pt-7.5 text-primary-text relative bg-quaternary ${
        popular
          ? " bg-[linear-gradient(90deg,_rgba(4,_228,_188,_0.4),_transparent)] border-2 border-primary pr-8 sm:pr-16 md:pr-32 shadow-primary"
          : " pr-6 sm:pr-8 md:pr-12 shadow-amber-300"
      } transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.05] hover:shadow-md md:hover:shadow-2xl`}
      onMouseEnter={changeItem}
    >
      {popular && (
        <div className="bg-primary p-1 md:p-1.5 rounded-md md:rounded-lg absolute top-0 translate-y-[-50%] left-3 md:left-5 text-secondary font-bold text-xs md:text-sm">
          Popular
        </div>
      )}

      <div className="flex flex-col sm:flex-row w-[100%] items-start sm:items-center gap-2 sm:gap-3 md:gap-5">
        <h2 className="text-lg md:text-xl font-bold">Desafíos MyFondeo</h2>
        {!popular && (
          <div className="bg-[linear-gradient(105deg,_rgba(255,_207,_0,_0.85)_20%,_rgba(255,_207,_0,_0.80)_30%,_#0001)] p-1 md:p-1.5 rounded-md md:rounded-lg text-primary-text font-bold px-3 md:px-5 border-2 border-amber-300 text-xs md:text-sm">
            Pro
          </div>
        )}
      </div>
      <ul className={`${popular ? "mt-2 md:mt-2.5" : "mt-1.5 md:mt-1"} space-y-1`}>
        {items.map((label) => (
          <li
            className="flex items-center gap-2 font-normal text-xs sm:text-sm mt-1"
            key={label}
          >
            <Check className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] flex-shrink-0" /> 
            <span className="leading-tight">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
