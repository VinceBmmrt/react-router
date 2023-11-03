import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { Post } from '../../@types/post';
import Spinner from '../../components/Spinner/Spinner';
import Posts from '../../components/Posts/Posts';

function Category() {
  // le hook useParams nous permettre de récupérer les paramètres de l'url
  // C'est un peu l'équivelent de req.params dans Express
  const { slug } = useParams();

  if (!slug) {
    throw new Error('Aucun slug fourni');
  }

  // J'utilise le slug pour récupérer les posts de la catégorie depuis mon API
  const {
    data: posts,
    isLoading,
    error,
  } = useAsyncFetch<Post[]>(
    `https://oblog-react.vercel.app/api/posts?categorySlug=${slug}`
  );

  // Si l'API nous renvoie une erreur, on va déclencher une erreur dans notre application
  // Cela permettra d'afficher le composant définis sur notre router pour les erreur
  if (error) {
    throw error;
  }

  return <main>{isLoading ? <Spinner /> : <Posts posts={posts || []} />}</main>;
}

export default Category;
