export default function CircleImg({ src, containerClasses }) {
  return (
    <div
      className={`rounded-full bg-orange-100  aspect-square absolute  ${containerClasses}`}
    >
      <img
        src={src}
        className="absolute z-10 size-10/12 transform translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2"
      />
    </div>
  );
}
