import Tag from "./Tag";

export default function Personal() {
  return (
    <div className="flex flex-col items-start p-4 mb-4 bg-neutral-100 rounded-3xl">
      <h1 className="text-lg font-semibold font-inter">Personal Projects</h1>
      <ul className="[&_li]:mt-3 ml-6 list-disc text-neutral-600 font-inter">
        <li>
          <p>
            <span className="font-medium">Blog</span> about my personal projects
            and my learning process.
          </p>
        </li>
        <li>
          <p>
            This personal website with <Tag color="neutral">Next</Tag>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium">Spotify</span> clone with{" "}
            <Tag color="neutral">Next</Tag> + <Tag color="blue">Tailwind</Tag>{" "}
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium underline">Vault</span>, a password
            manager for myself with <Tag color="red">Laravel Breeze</Tag> +{" "}
            <Tag color="cyan">React</Tag>.
          </p>
        </li>
      </ul>
    </div>
  );
}
