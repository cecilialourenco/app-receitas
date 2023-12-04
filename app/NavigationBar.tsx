import { signOut } from "firebase/auth";
import { useRef, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { auth } from "../lib/firebase";
import NavLinks from "./NavLinks";
import style from "../styles/home.module.scss"; 
import "./NavigationBar.scss";

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function NavigationBar() {
  const searchRef = useRef<HTMLInputElement>(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  
  function handleSearch(e: any) {
    e.preventDefault();
    const search = searchRef.current?.value;
    window.location.href = `/recipe.list?search=${search}`;
  }
  
  function handleLogout() {
    signOut(auth);
    localStorage.removeItem("userId");
    window.location.href = "/";
  }
  return (
    <>
      <Navbar
        className={style.navbar}>
        <p
          className={style.calendar}>
          {`${diasDaSemana[hoje.getDay()]}, ${hoje.toLocaleDateString('pt-BR')}`}
        </p>
        <Navbar.Brand href="/recipe.list">
          <img
            src="/cook-book.png"
            alt="logo"
            className={style.logoImage} />
          <img
            src="/comida-pra-semana-high-resolution-logo-color-on-transparent-background (1).png"
            alt="logo"
            className={style.logoTitle} />
        </Navbar.Brand>
        <button className={style.hamburger} onClick={() => setIsNavOpen((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-pulse absolute end-5 top-10"
            aria-hidden="true" 
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <Form className={style.search} onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Digite o que você procura:"
            className="me-2"
            aria-label="Search"
            ref={searchRef} />
          <Button
            className={style.button}
            onClick={handleSearch}
          >
            Pesquisar
          </Button>
        </Form>
      </Navbar>
      
      <Nav>
        <section style={{width: "100%"}}>
        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            onClick={() => setIsNavOpen(false)}
            style={{backgroundColor: "white", textAlign: "end"}}
          >
            <svg
              className={style.x}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          
          <ul onClick={() => setIsNavOpen(false)} className={style.showMenuNav}>
            <li>
              <a href="/recipe.list">Comidinhas</a>
            </li>
            <li>
              <a href="/weekly.planning">Planejamento Semanal</a>
            </li>
            <li>
              <a href="/shopping.list">Lista de Compras</a>
            </li>
            <li>
              <a href="/" onClick={handleLogout}>Sair</a>
            </li>
          </ul>
        </div> 
      </section> 
      <div className='nav-elements'>
        <ul>
            <li>
              <NavLinks href="/recipe.list">Comidinhas</NavLinks>
            </li>
            <li>
              <NavLinks href="/weekly.planning">Planejamento Semanal</NavLinks>
            </li>
            <li>
              <NavLinks href="/shopping.list">Lista de Compras</NavLinks>
            </li>
            <li>
              <NavLinks href="/" onClick={handleLogout}>Sair</NavLinks>
            </li>
          </ul>
        </div>
      </Nav>
      <style>
        {`
          .hideMenuNav {
            display: none;
          }
        `}
      </style>
    </>
  );
};
