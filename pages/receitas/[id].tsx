/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-key */
import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import Layout from "../../app/Layout";
import Recipe from "../../app/Recipe";
import { db } from "../../lib/firebase";

export default function Receita() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>loading</p>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recipe, recipeLoading, recipeError] = useDocument(
    doc(db, "Recipes", id as string),
    {}
  );

  if (recipe) {
    var data = recipe.data();
    console.log(data);
  }
  return (
    <>
      <Layout>
        {data && recipe && (
          <Recipe
            title={data.title}
            cover={data.cover}
            id={recipe.id}
            instructions={data.instructions}
            ingredients={data.ingredients}
          />
        )}
      </Layout>
    </>
  );
};
