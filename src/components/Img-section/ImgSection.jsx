export default function ImgSection(props) {
  const { img, direction, order, title } = props;

  return (
    <div
      className={`lg:col-span-7 col-span-12 ${
        order === "inverse" ? "lg:order-2 order-1" : "order-1"
      }`}
    >
      {title && <h4 className="lg:text-7xl lg:hidden block text-center  text-5xl font-tinos font-semibold">
        {title}
      </h4>}
      <div
        className={`flex lg:py-28 lg:my-0 my-32  items-center justify-center relative lg:${direction}-32 `}
      >
        <div className="bg-gray-200 lg:top-1/2 lg:-translate-y-1/2 z-10 xl:size-[42rem] lg:size-[40rem] size-[20rem] rounded-full block absolute"></div>
        <div className="bg-gray-100 lg:top-1/2 lg:-translate-y-1/2  z-0 xl:size-[52rem] lg:size-[50rem] size-[25rem] rounded-full block absolute"></div>
        <img
          src={img}
          alt="img"
          className="z-20 xl:size-[33rem] lg:size-[30rem] size-[15rem]"
        />
      </div>
    </div>
  );
}
