import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import Tooltip from "./Tooltip";

const handleConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 80,
  });
};

export default function Bio() {
  return (
    <>
      <div className="flex flex-col items-start gap-4 p-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src="/images/selfie-1.jpeg"
              alt="Selfie of Jordi Capellades"
              width={80}
              height={80}
              className="rounded-[2rem]"
            />
            <span className="absolute p-1 border-2 border-blue-600 rounded-full cursor-pointer -bottom-2 -left-2 bg-neutral-50">
              <Image
                src="https://emojicdn.elk.sh/🎉"
                alt="Peace sign emoji"
                width={25}
                height={25}
                onClick={handleConfetti}
              />
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-black font-inter">Jordi Capellades</h1>
            <p className="text-neutral-500 font-inter">
              @jordicapellad3s on{" "}
              <span className="relative group w-max">
                <Tooltip>Follow me on Twitter!</Tooltip>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/jordicapellad3s"
                >
                  <span className="font-semibold cursor-pointer hover:underline">
                    Twitter
                  </span>{" "}
                </Link>
              </span>
              and{" "}
              <span className="relative group w-max">
                <Tooltip>Follow me on Github!</Tooltip>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jordicapellad3s"
                >
                  <span className="font-semibold cursor-pointer hover:underline">
                    GitHub
                  </span>
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold font-inter">Hello, World!</h1>
            <div className="flex gap-1">
              <Image
                src="https://emojicdn.elk.sh/🌍"
                alt="World emoji"
                width={20}
                height={20}
              />
              <Image
                src="https://emojicdn.elk.sh/👋🏼"
                alt="Waving hand emoji"
                width={20}
                height={20}
              />
            </div>
          </div>
          <p className="text-neutral-700 font-inter">
            I&apos;m a developer based in{" "}
            <span className="font-bold">Barcelona</span> with a passion for
            create and building digital stuff. I&apos;m currently learning
            Frontend technologists like{" "}
            <span className="font-medium underline">
              Next, React and Tailwind
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}
