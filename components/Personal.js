import Link from "next/link";
import Tag from "./Tag";
import Tooltip from "./Tooltip";
import { FaGithubAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Personal() {
  return (
    <motion.div
      className="flex flex-col items-start p-4 mb-4 bg-neutral-100 rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
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
          <p className="flex items-center">This personal website.</p>
        </li>
        <li>
          <p>
            <Link href="/posts/spotify-clone">
              <span className="font-medium underline">Spotify</span> clone with{" "}
            </Link>
            <Tag bg="bg-neutral-300">Next</Tag> +{" "}
            <Tag bg="bg-blue-300">Tailwind</Tag>{" "}
          </p>
        </li>
        <li>
          <p>
            <Link href="/posts/vault">
              <span className="font-medium underline">Vault</span>
            </Link>
            , a password manager.
          </p>
        </li>
        <li>
          <p>
            <Link href="/posts/wedding-invitation">
              <span className="font-medium underline">Wedding invitation</span>
            </Link>{" "}
            for my brother.
          </p>
        </li>
        <li>
          <p>
            <Link href="/posts/landing">
              <span className="font-medium underline">Landing page</span>
            </Link>{" "}
            to learn <Tag bg="bg-yellow-300">Typescript</Tag> +{" "}
            <Tag bg="bg-neutral-300">Next</Tag> +{" "}
            <Tag bg="bg-blue-300">Tailwind</Tag>
          </p>
        </li>
        <li>
          <p>
            <Link href="/posts/progress">
              <span className="font-medium underline">Progress</span>
            </Link>
            , a simple app with date information.
          </p>
        </li>
      </ul>
    </motion.div>
  );
}
