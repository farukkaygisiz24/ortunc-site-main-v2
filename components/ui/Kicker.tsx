import TriangleIcon from "@/components/ui/TriangleIcon";

type KickerProps = {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export default function Kicker({ children, dark = false, className = "" }: KickerProps) {
  return (
    <div className={`flex items-center gap-[9px] ${className}`}>
      <TriangleIcon fill={dark ? "#5a5af5" : "#2626bc"} className="mt-0.5 shrink-0" />
      <span
        className={`text-[13px] font-extrabold uppercase tracking-[.16em] ${dark ? "text-[#a9aefc]" : "text-brand-blue"}`}
      >
        {children}
      </span>
    </div>
  );
}
