import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Not found.</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">¥{product.price}</p>
      <p>（商品の詳細説明がここに入ります）</p>
    </div>
  );
}
