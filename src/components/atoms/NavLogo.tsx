import Link from "next/link";
import Image from "next/image";

type NavLogoProps = {
  href?: string | null;
  onClick?: () => void;
  className?: string;
  heightClass?: string;
};

export default function NavLogo({
  href = null,
  onClick,
  className = "",
  heightClass = "h-16",
}: NavLogoProps) {
  const LogoImage = (
    <Image
      src="/images/logo.png"
      alt="Jard’or — Logo"
      width={110}
      height={32}
      priority
      className={`${heightClass} w-auto object-contain`}
    />
  );

  // If href is provided → use Next.js Link
  if (href) {
    return (
      <Link href={href} className={`flex items-center select-none ${className}`}>
        {LogoImage}
      </Link>
    );
  }

  // Otherwise → use button (for scroll-to-homepage)
  return (
    <button
      onClick={onClick}
      className={`flex items-center select-none cursor-pointer ${className}`}
    >
      {LogoImage}
    </button>
  );
}