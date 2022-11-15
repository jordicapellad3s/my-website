import Link from "next/link";
import React from "react";

export default function TechnicalPosts() {
  return (
    <div>
      <Link href="/" className="mb-3">
        <span className="px-2 py-1 font-bold text-neutral-800 hover:underline">
          ← Jordi Capellades
        </span>
      </Link>
      <div className="p-2 mt-4 bg-neutral-200/50 rounded-xl text-neutral-600 font-inter ">
        <p className="">
          These are my blog posts on niche programming solutions, which are
          probably only interesting if you&apos;re searching for a specific
          solution.
        </p>
        <p className="mt-2 font-medium underline text-neutral-800">
          <Link href="/posts">The rest of my blog posts are here.</Link>
        </p>
      </div>
    </div>
  );
}
