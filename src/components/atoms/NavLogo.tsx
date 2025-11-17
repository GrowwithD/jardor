import Link from "next/link";
import Image from "next/image";

type NavLogoProps = {
  href?: string;
  className?: string;
  heightClass?: string;
};

export default function NavLogo({
  href = "/",
  className = "",
  heightClass = "h-16",
}: NavLogoProps) {
  return (
    <Link href={href} className={`flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Jard’or — Logo"
        width={110}
        height={32}
        priority
        className={`${heightClass} w-auto object-contain`}
      />
    </Link>
  );
}