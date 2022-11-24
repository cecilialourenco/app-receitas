/* eslint-disable react/no-children-prop */
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

function Login() {
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

  return (
    <>
      <Layout>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#67A438" }}>Faça o seu login</h1>
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
            <button
              style={{
                backgroundColor: "#67A438",
                color: "#fff",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: "10px",
                width: "120px",
                fontWeight: "bold",
                border: "none",
                padding: "10px 15px",
                fontSize: "1em",
              }}
            >
              Entrar
            </button>
            {"  "}
            <Link href="/signin">
              <a>Não possui uma conta? Cadastre-se</a>
            </Link>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Login;
