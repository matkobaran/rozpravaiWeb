import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

/** Full wordmark asset in `public/rozpravai-logo.jpg` (icon + ROZPRAVAI text). */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/rozpravai-logo.jpg"
      alt="RozpravaAI"
      width={140}
      height={111}
      loading="eager"
      decoding="async"
      className={cn("h-9 w-auto object-contain object-left shrink-0", className)}
    />
  );
}
