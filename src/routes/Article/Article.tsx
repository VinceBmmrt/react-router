import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import Spinner from '../../components/Spinner/Spinner';
import { Post } from '../../@types/post';
import { useState } from 'react';

function Article() {
  // Pour récupérer les paramètres de l'url, on utilise le hook useParams
  const { id } = useParams();

  if (!id) {
    throw new Error("l'url ne contient pas d'id");
  }

  // {data: post} me permet de renommé la propriété `data` retourner par useAsyncFetch en `post`
  const {
    data: post,
    isLoading,
    error,
  } = useAsyncFetch<Post>(`https://oblog-react.vercel.app/api/posts/${id}`);

  // Si l'API me retourne une erreur, je déclanche l'erreur pour pouvoir afficher le composant définis dans errorElement de mon router
  if (error) {
    throw error;
  }

  return (
    <main>
      {isLoading && <Spinner />}
      {/* la donnée récupérer depuis mon API n'est pas tout de suite présente... */}
      {/* (tant que l'API ne m'a pas répondu, `post` === undefined) */}
      {/* On va donc conditionner l'affichage de l'article à l'existance de ma donnée */}
      {post && (
        <article>
          <h1>{post.title}</h1>
        </article>
      )}
    </main>
  );
}

export default Article;
