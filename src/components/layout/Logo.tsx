import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import logoWhite from "../../../public/brand/logo-white.png";

/*
 * White wordmark, links to home. Logo usage rules (brief §2): never stretch,
 * rotate, recolor, add effects, or place on the orange accent. Aspect ratio is
 * preserved via the imported intrinsic dimensions (350×71).
 */
export function Logo({
  className,
  height = 26,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="The Stralis — home"
      className={cn("inline-flex items-center focus-visible:outline-orange", className)}
    >
      <Image
        src={logoWhite}
        alt="The Stralis"
        height={height}
        width={Math.round((350 / 71) * height)}
        priority={priority}
        className="h-auto w-auto select-none"
        style={{ height }}
      />
    </Link>
  );
}
