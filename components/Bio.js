import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

const handleConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 80,
  });
};

export default function Bio() {
  return (
    <>
      <div className="flex flex-col items-start gap-6 p-4 bg-neutral-50 rounded-3xl">
        <div className="flex items-center gap-2">
          <Image
            src="/images/selfie-1.jpeg"
            alt="Selfie of Jordi Capellades"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full cursor-pointer"
            onClick={handleConfetti}
          />
          <div>
            <h1 className="text-2xl font-black font-inter">Jordi Capellades</h1>
            <p className="text-neutral-500 font-inter">
              @jordicapellad3s on{" "}
              <Link href="https://twitter.com/jordicapellad3s">
                <span className="font-semibold underline cursor-pointer">
                  Twitter
                </span>{" "}
              </Link>
              and{" "}
              <Link href="https://github.com/jordicapellad3s">
                <span className="font-semibold underline cursor-pointer">
                  GitHub
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold font-inter">Hello, World!</h1>
        </div>
      </div>
    </>
  );
}
