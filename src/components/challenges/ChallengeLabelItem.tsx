interface ChallengeLabelItemProps {
  label: string;
  subtitle?: string;
  icon?: any;
  bgDark?: boolean;
}

export const ChallengeLabelItem = ({
  label,
  subtitle,
  icon: Icon,
  bgDark,
}: ChallengeLabelItemProps) => {
  return (
    <div
      className={`flex items-center w-full z-100 h-[60px] gap-3 px-2 ${
        bgDark ? "bg-tertiary/75 rounded-l-lg" : ""
      }`}
    >
      {<Icon className="text-primary w-9 aspect-square" />}
      <div className="flex flex-col text-center max-w-16 py-1">
        <span className="text-sm font-medium leading-tight">{label}</span>
        {subtitle && <span className="text-xs font-light">{subtitle}</span>}
      </div>
      <div className="w-10"></div>
    </div>
  );
};
