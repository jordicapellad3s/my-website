import Layout from "../components/Layout";
import confetti from "canvas-confetti";
import Bio from "../components/Bio";

export default function Home() {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
    });
  };

  return <Bio />;
}
