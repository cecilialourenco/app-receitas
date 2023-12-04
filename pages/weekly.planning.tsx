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
        Adicione as comidinhas que vão fazer parte do cardápio da semana
      </p>
      
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{fontSize: "20px", color:  "#67A438"}}>Selecione as categorias de refeições do seu dia a dia:</div>
        <div 
          className="btn-group" 
          role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btnCheck1" autoComplete="off"/>
        <label 
          className="btn btn-outline-primary" 
          htmlFor="btnCheck1"
        >CAFÉ DA MANHÃ</label>

        <input type="checkbox" className="btn-check" id="btnCheck2" autoComplete="off"/>
        <label 
          className="btn btn-outline-primary" 
          htmlFor="btnCheck2"
        >COLAÇÃO</label>

        <input type="checkbox" className="btn-check" id="btnCheck3" autoComplete="off"/>
        <label 
          className="btn btn-outline-primary" 
          htmlFor="btnCheck3"
        >ALMOÇO</label>

        <input type="checkbox" className="btn-check" id="btnCheck4" autoComplete="off"/>
        <label 
          className="btn btn-outline-primary" 
          htmlFor="btnCheck4"
        >LANCHE</label>

        <input type="checkbox" className="btn-check" id="btnCheck5" autoComplete="off"/>
        <label 
          className="btn btn-outline-primary" 
          htmlFor="btnCheck5"
        >JANTAR</label>

        <input type="checkbox" className="btn-check" id="btnCheck6" autoComplete="off"/>
        <label 
          className="btn btn-outline-primary" 
          htmlFor="btnCheck6"
        >CEIA</label>
      </div>
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
