import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function NavLinks({ href, children, onClick }: Props) {
  const isActive = href === useRouter().pathname;
  const style = {
    backgroundColor: isActive ? "#67A438" : "transparent",
    width: "100%",
  };
  return (
    <Link href={href} style={style} onClick={onClick} className="text-white nav-link">
      {children}
    </Link>
  );
};
