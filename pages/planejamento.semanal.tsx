/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import DiaDaSemana from "../components/DiaDaSemana";
import Layout from "../components/Layout";

function PlanejamentoSemanal() {
  return (
    <Layout>
      <h1
        style={{
          color: "#67A438",
          textAlign: "center",
        }}
      >
        Cardápio da Semana
      </h1>
      <p style={{ textAlign: "center", color: "#aaa" }}>
        Escolha as receitas que vão fazer parte do cardápio da semana
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <DiaDaSemana dia={"Seg"} />
        <DiaDaSemana dia={"Ter"} />
        <DiaDaSemana dia={"Qua"} />
        <DiaDaSemana dia={"Qui"} />
        <DiaDaSemana dia={"Sex"} />
        <DiaDaSemana dia={"Sáb"} />
        <DiaDaSemana dia={"Dom"} />
      </div>
    </Layout>
  );
}

export default PlanejamentoSemanal;
