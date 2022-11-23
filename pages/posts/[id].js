import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="mb-6">
        <Link
          href="/posts"
          className="px-2 py-1 font-bold text-neutral-800 hover:underline"
        >
          ← Jordi Capellades&apos; Blog
        </Link>
      </div>
      {/* prose image center */}

      <article className="prose prose-img:rounded-lg prose-img:mx-auto font-inter">
        <h1 className="m-0 text-4xl font-bold font-fraunces">
          {postData.title}
        </h1>
        <div className="mb-4">
          <Date type="long" dateString={postData.date} />
        </div>
        <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
