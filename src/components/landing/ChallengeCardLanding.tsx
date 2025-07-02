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
      className={`rounded-2xl p-5 pt-7.5 text-primary-text relative bg-quaternary ${
        popular
          ? " bg-[linear-gradient(90deg,_rgba(4,_228,_188,_0.4),_transparent)] border-2 border-primary pr-32 shadow-primary"
          : " pr-12 shadow-amber-300"
      } transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl`}
      onMouseEnter={changeItem}
    >
      {popular && (
        <div className="bg-primary p-1.5 rounded-lg absolute top-0 translate-y-[-50%] left-5 text-secondary font-bold">
          {" "}
          Popular{" "}
        </div>
      )}

      <div className="flex w-[100%] align-bottom gap-5">
        <h2 className="text-xl font-bold">Desafíos MyFondeo</h2>
        {!popular && (
          <div className="bg-[linear-gradient(105deg,_rgba(255,_207,_0,_0.85)_20%,_rgba(255,_207,_0,_0.80)_30%,_#0001)] p-1.5 rounded-lg text-primary-text font-bold px-5 border-2 border-amber-300">
            {" "}
            Pro{" "}
          </div>
        )}
      </div>
      <ul className={popular ? "mt-2.5" : "mt-1"}>
        {items.map((label) => (
          <li
            className="flex items-center gap-2 font-normal text-sm mt-1"
            key={label}
          >
            <Check className="w-[20px] h-[20px]" /> {label}
          </li>
        ))}
      </ul>
    </div>
  );
};
