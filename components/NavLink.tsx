import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";

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
    <Nav.Link className="text-white" style={style} href={href}>
      {children}
    </Nav.Link>
  );
}
export default NavLink;
