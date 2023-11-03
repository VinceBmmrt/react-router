import DOMPurify from 'dompurify';
import { Post as TPost } from '../../@types/post';
import './Post.scss';

type PostProps = {
  post: TPost;
};

function Post({ post }: PostProps) {
  const purifiedHtml = DOMPurify.sanitize(post.excerpt);
  return (
    <article className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category.name}</div>
      <p
        className="post-excerpt"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: purifiedHtml }}
      />
    </article>
  );
}

export default Post;
