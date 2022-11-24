/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import Layout from "../components/Layout";

function PlanejamentoSemanal() {
  const [value, onChange] = useState(new Date());

  return <Layout children={undefined}></Layout>;
}

export default PlanejamentoSemanal;
