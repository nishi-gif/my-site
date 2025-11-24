import { useParams } from "react-router-dom";
import { newsData } from "../data/news";

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((n) => n.id === Number(id));

  if (!news) return <p>Not found.</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{news.title}</h2>
      <p className="text-gray-500 mb-4">{news.date}</p>
      <p>（ここに詳細本文が入ります）</p>
    </div>
  );
}
