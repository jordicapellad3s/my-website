import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";
import { parseISO, format } from "date-fns";
import Tag from "../components/Tag";

export default function Posts({ allPostsData }) {
  console.log(allPostsData);
  return (
    <div>
      <div className="mb-6">
        <Link
          href="/"
          className="px-2 py-1 font-bold text-neutral-800 hover:underline"
        >
          ← Jordi Capellades
        </Link>
      </div>
      <div className="p-2 bg-neutral-200/50 rounded-xl text-neutral-600 font-inter">
        <p className="">
          <span className="text-xl font-bold font-fraunces">Welcome</span> to my
          blog. I don&apos;t know how often I will post here, but I will try to
          do it as often as I can. I will post about my projects, my thoughts,
          and my life. Likewise, I hope you enjoy it.
        </p>
      </div>
      <div className="mt-6 space-y-2">
        {allPostsData.map(({ id, date, title, tag }) => (
          <ul key={id} className="font-medium font-inter text-neutral-900">
            <li
              className="flex flex-col justify-between m-0 sm:flex-row md:items-center"
              key={id}
            >
              <div>
                <Link
                  href={`/posts/${id}`}
                  className="no-underline hover:underline"
                >
                  {title}
                </Link>
                {tag && <Tag bg="bg-slate-600">{tag}</Tag>}
              </div>
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
