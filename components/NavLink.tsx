import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: Props) {
  const isActive = href === useRouter().pathname;
  const style = {
    backgroundColor: isActive ? "#67A438" : "transparent",
  };
  return (
    <Link href={href}>
      <a style={style} className="text-white nav-link">
        {children}
      </a>
    </Link>
  );
}
export default NavLink;
