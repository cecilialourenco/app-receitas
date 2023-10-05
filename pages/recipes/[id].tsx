import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import Layout from "../../app/Layout";
import Recipe from "../../app/Recipe";
import { db } from "../../lib/firebase";

export default function Recipes() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>loading</p>;
  }

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
