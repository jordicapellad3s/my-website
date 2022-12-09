import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <motion.div
        className="p-4 pt-8 pb-36 sm:pt-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-screen-sm mx-auto">{children}</div>
      </motion.div>
    </>
  );
}
