/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import Weekdays from "../app/Weekdays";
import Layout from "../app/Layout";

export default function WeeklyPlanning() {
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
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Weekdays dia={"Seg"} />
        <Weekdays dia={"Ter"} />
        <Weekdays dia={"Qua"} />
        <Weekdays dia={"Qui"} />
        <Weekdays dia={"Sex"} />
        <Weekdays dia={"Sáb"} />
        <Weekdays dia={"Dom"} />
      </div>
    </Layout>
  );
};
