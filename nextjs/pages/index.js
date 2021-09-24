import Link from "next/link";
import Head from 'next/head';
export default function Home({ allPostsData }) {
  return (
   <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
     <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/perfil">
          <a>Mi perfil</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className="color">Mi blog</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/post/hola-mundo">
          <a>Post</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/post/posts/">
          <a>Posts</a>
        </Link>
      </li>
    </ul>
    
    </>
  );
}
