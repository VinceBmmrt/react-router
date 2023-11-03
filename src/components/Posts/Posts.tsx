import { Post as TPost } from '../../@types/post';
import Post from '../Post/Post';

import './Posts.scss';

type PostsProps = {
  posts: TPost[];
};

function Posts({ posts }: PostsProps) {
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {posts.map((post) => (
          // Plutôt que de mettre tous le HTML dans le map, on va très souvent préféré découper plus finement le code
          // On créer un composant s'occupant de l'affichage d'un seul élément
          // On lui passera les données de l'élément sur lequel on boucle
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Posts;
