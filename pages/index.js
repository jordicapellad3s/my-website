import Layout from "../components/Layout";
import confetti from "canvas-confetti";
import Bio from "../components/Bio";
import Work from "../components/Work";
import Personal from "../components/Personal";

export default function Home() {
  return (
    <>
      <Bio />
      <Work />
      <Personal />
    </>
  );
}
