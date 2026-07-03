import LogoMark from "@/components/ui/LogoMark";

type KickerProps = {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export default function Kicker({ children, dark = false, className = "" }: KickerProps) {
  return (
    <div className={`flex items-center gap-[9px] ${className}`}>
      <LogoMark size={16} className="mt-0.5" />
      <span
        className={`text-[13px] font-extrabold uppercase tracking-[.16em] ${dark ? "text-[#a9aefc]" : "text-brand-blue"}`}
      >
        {children}
      </span>
    </div>
  );
}
