import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

/** Full wordmark asset in `public/rozpravai-logo.jpg` (icon + ROZPRAVAI text). */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/rozpravai-logo.png"
      alt="RozpravaAI"
      width={180}
      height={180}
      loading="eager"
      decoding="async"
      className={cn("h-9 w-auto object-contain object-left shrink-0", className)}
    />
  );
}
