import { useParams } from 'react-router-dom';

function Article() {
  // Pour récupérer les paramètres de l'url, on utilise le hook useParams
  const { id } = useParams();

  if (!id) {
    throw new Error("l'url ne contient pas d'id");
  }

  return <div>Mon Article {id}</div>;
}

export default Article;
