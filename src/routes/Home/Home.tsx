import { Post } from '../../@types/post';
import Posts from '../../components/Posts/Posts';
import Spinner from '../../components/Spinner/Spinner';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

function Home() {
  const { data: posts, isLoading } = useAsyncFetch<Post[]>(
    'https://oblog-react.vercel.app/api/posts'
  );
  return (
    <main>
      {isLoading && <Spinner />}
      <Posts posts={posts || []} />
    </main>
  );
}

export default Home;
