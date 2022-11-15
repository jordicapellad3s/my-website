import Link from "next/link";
import Tag from "./Tag";
import Tooltip from "./Tooltip";

export default function Personal() {
  return (
    <div className="flex flex-col items-start p-4 mb-4 bg-neutral-100 rounded-3xl">
      <h1 className="text-lg font-semibold font-inter">Personal Projects</h1>
      <ul className="[&_li]:mt-3 ml-6 list-disc text-neutral-600 font-inter">
        <li>
          <p>
            <span className="relative group w-max">
              <Tooltip>Go to my blog!</Tooltip>
              <Link href="/posts">
                <span className="font-medium underline cursor-pointer">
                  Blog
                </span>{" "}
              </Link>
            </span>
            about my personal projects, life, and thoughts.
          </p>
        </li>
        <li>
          <p>
            This personal website with <Tag bg="bg-neutral-300">Next</Tag>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium">Spotify</span> clone with{" "}
            <Tag bg="bg-neutral-300">Next</Tag> +{" "}
            <Tag bg="bg-blue-300">Tailwind</Tag>{" "}
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium">Vault</span>, a password manager for
            myself with <Tag bg="bg-red-300">Laravel Breeze</Tag> +{" "}
            <Tag bg="bg-cyan-300">React</Tag>
          </p>
        </li>
      </ul>
    </div>
  );
}
