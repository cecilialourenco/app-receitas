import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function NavLink({ href, children, onClick }: Props) {
  const isActive = href === useRouter().pathname;
  const style = {
    backgroundColor: isActive ? "#67A438" : "transparent",
  };
  return (
    <Link href={href} style={style} onClick={onClick} className="text-white nav-link">
      {children}
    </Link>
  );
};
