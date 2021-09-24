import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/post/${post.id}`}>
            <a>{post.titulo}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}