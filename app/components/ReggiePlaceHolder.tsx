import { PawIcon } from "./Icons";

type ReggiePlaceholderProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  sm: "size-10",
  md: "size-16",
  lg: "size-28",
  xl: "size-44",
};

/**
 * Temporary stand-in for the Reggie mascot illustration.
 * Swap the contents of this component for the real artwork
 * (e.g. an <Image src="/reggie/..." />) once it's ready.
 */
export function ReggiePlaceholder({ size = "md", className = "" }: ReggiePlaceholderProps) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full border-2 border-dashed border-[#f3cfe5] bg-white/70 text-[#f89cac] ${sizes[size]} ${className}`}
      title="Reggie illustration placeholder"
    >
      <PawIcon className="size-1/2" />
    </div>
  );
}
