/* eslint-disable react/no-children-prop */
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import BrowserTab from "../app/BrowserTab";

export default function RegisterUser() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }
    console.log(user);
  };

  function handleLogin() {
    window.location.href = "/login";
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ margin: "20px 10px auto 20px", textAlign: "center" }}>
        <BrowserTab />
        <Navbar.Brand href="/">
          <img
            src="/cook-book.png"
            alt="logo"
            height="74px"
            style={{ marginRight: "10px" }}
          />
          <img
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
          <h1 style={{ color: "#67A438" }}>Crie sua conta</h1>
          <p style={{ color: "#aaa" }}>
            Crie seu usuário e comece a utilizar o Comida Pra Semana
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "50%", margin: "0 auto" }}
          >
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1em",
              }}
            >
              <span
                style={{
                  marginBottom: "0.3em",
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#000",
                }}
              >
                Nome:
              </span>
              <input
                type="text"
                name="displayName"
                required
                placeholder="Nome do usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
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
                Confirmação de senha:
              </span>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme a sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <button className="button" onClick={handleLogin}>
              Cadastrar
            </button>
            {"   "}
            <Link href="/login">
              <a>Já possui uma conta? Entre</a>
            </Link>
            {error && (
              <p
                style={{
                  color: "#721c24",
                  backgroundColor: "#f8d7da",
                  border: "1px solid #f5c6cb",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
