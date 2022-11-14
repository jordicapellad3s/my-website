import Link from "next/link";

export default function posts() {
  return (
    <div>
      <Link href="/" className="mb-3">
        <span className="px-2 py-1 font-bold text-neutral-800 hover:underline">
          ← Jordi Capellades
        </span>
      </Link>
      <p className="p-2 mt-4 bg-neutral-200/50 rounded-xl text-neutral-600 font-inter">
        Welcome to my blog. I don&apos;t know how often I will post here, but I
        will try to do it as often as I can. I will post about my projects, my
        thoughts, and my life. Likewise, I hope you enjoy it.
      </p>
    </div>
  );
}
