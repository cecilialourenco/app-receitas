/* eslint-disable react/no-children-prop */
import Link from "next/link";
import { useState } from "react";
import { Form, Image, Navbar } from "react-bootstrap";
import BrowserTab from "../app/BrowserTab";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };

    console.log(user);
  };
  function handleReceitas() {
    window.location.href = "/recipe.list";
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ margin: "20px 10px auto 20px", textAlign: "center" }}>
        <BrowserTab />
        <Navbar.Brand href="/">
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
        <hr
          style={{
            width: "100%",
            height: "5px",
            color: "#EC9131",
            backgroundColor: "#EC9131",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#67A438" }}>Faça o seu login</h1>
          <p style={{ textAlign: "center", color: "#aaa" }}>
            E tenha acesso ao seu caderno de receitas e ao cardápio semanal
          </p>
          <Form.Group>
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "50%", margin: "0 auto" }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1em",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    marginBottom: "0.3em",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  E-mail:
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail do usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1em",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    marginBottom: "0.3em",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Senha:
                </span>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Insira sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button className="button" onClick={handleReceitas}>
                Entrar
              </button>
              {"  "}
              <Link href="/register.user">
                <a>Não possui uma conta? Cadastre-se</a>
              </Link>
            </form>
          </Form.Group>
        </div>
      </div>
    </div>
  );
};
