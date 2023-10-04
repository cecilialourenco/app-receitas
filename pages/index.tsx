import { Image, Navbar } from "react-bootstrap";
import BrowserTab from "../app/BrowserTab";
import googleHandler from "../lib/auth";
import style from "../styles/index.module.css";

export default function Home() {
  function handleRegister() {
    window.location.href = "/register.user";
  }
  function handleLogin() {
    window.location.href = "/login";
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ margin: "20px 10px auto 20px", textAlign: "center" }}>
        <BrowserTab />
        <Navbar.Brand>
          <Image
            src="/cook-book.png"
            alt="logo"
            height="74px"
            style={{ marginRight: "10px" }}
          />
          <Image
            src="/comida-pra-semana-high-resolution-logo-color-on-transparent-background (1).png"
            alt="logo"
            width={500}
          />
        </Navbar.Brand>
      </div>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundImage: "url(/colorful-veggies-frame-with-copy-space.webp)",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={style.destaque}>
          <p>
            Quer uma ajudinha para salvar suas receitas e poder acessá-las de um
            jeito prático?
            <br /> Além disso, você também poderá criar cardápios semanais para
            dar aquela organizada na sua rotina.
            <br /> Crie sua conta aqui no Comida Pra Semana e comece a usufruir
            destas comodidades. <br />
          </p>
          <div className="buttons">
            <button className="button" onClick={googleHandler}>
              Entrar
            </button>
            {/* <button className="button" onClick={handleRegister}>
              Criar conta
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
