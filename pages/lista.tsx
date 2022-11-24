/* eslint-disable react/no-children-prop */
import Cards from "../components/Cards";
import Layout from "../components/Layout";

function Lista() {
  return (
    <>
      <Layout children={[]} />
      <Cards />
    </>
  );
}

export default Lista;
