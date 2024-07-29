import { motion } from "framer-motion";

export default function CircleImg({ src, containerClasses }) {
  return (
    <div
      className={`rounded-full bg-orange-100  aspect-square absolute  ${containerClasses}`}
    >
      <motion.img
        initial={{ opacity: 0, rotate: 50, x: -100, y: 50 }}
        whileInView={{
          opacity: 1,
          rotate: 0,
          x: 0,
          y: 0,
          transform: "translate(50%, -50%)",
          top: "50%",
          right: "50%",
        }}
        transition={{ duration: 0.8 }}
        src={src}
        className="absolute z-10 size-10/12 transform translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2"
      />
    </div>
  );
}
