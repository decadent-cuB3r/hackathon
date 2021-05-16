import { Card, Button } from "antd";
import { Link } from "react-router-dom";


export default function ProductItem({ recipe }) {
  return (
    <Card className="">
      <Link to={`/cook/${recipe.id}`}>
        <img style={{ width: "100%" }} src={recipe.image} alt={recipe.name} />
      </Link>
      <div className="">
        <h2 className="">{recipe.name}</h2>
        <span className="">NTD {recipe.price}</span>
      </div>
      <div className="">
        <Link to={`/cook/${recipe.id}`}>
          <Button className="" type="ghost">More</Button>
        </Link>
      </div>
    </Card>
  );
}
