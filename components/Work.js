import Image from "next/image";
import Tag from "./Tag";

export default function Work() {
  return (
    <div className="flex flex-col items-start p-4 mb-4 bg-neutral-100 rounded-3xl">
      <h1 className="text-lg font-semibold font-inter">Work Experience</h1>
      <ul className="[&_li]:mt-3 ml-6 list-disc text-neutral-600 font-inter">
        <li>
          <p>
            Frontend and User tester in{" "}
            <span className="font-semibold underline">Sporttips</span> App
          </p>
          <span className="text-sm italic font-medium font-inter text-neutral-400">
            Project develop in 2022 at FHIOS
          </span>
        </li>
        <li>
          <p>
            Develop a SPA for{" "}
            <span className="font-semibold underline">SABA</span> (uk) using
            <Tag bg="bg-green-300">Vue</Tag> +{" "}
            <Tag bg="bg-purple-300">Bootstrap</Tag>
          </p>
          <span className="text-sm italic font-medium font-inter text-neutral-400">
            Project develop in 2021 at FHIOS
          </span>
        </li>
        <li>
          <p>
            Work at <span className="font-semibold underline">FHIOS</span> for
            two years
          </p>
          <span className="text-sm italic font-medium font-inter text-neutral-400">
            2020-2022
          </span>
        </li>
        <li>
          <p>
            Worked at <span className="font-semibold underline">Edittec</span>{" "}
            as a <Tag bg="bg-blue-300">Drupal</Tag> developer
          </p>
          <span className="text-sm italic font-medium font-inter text-neutral-400">
            2018-2020
          </span>
        </li>
      </ul>
    </div>
  );
}
