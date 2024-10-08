import bannerImg from "../../assets/imgs/signUp-img.png";

export default function ImgCol() {
  return (
    <div className="xl:col-span-6 h-full  col-span-7 hidden lg:flex  justify-end overflow-hidden  items-center relative before:content[''] before:bg-primaryOrange before:h-full before:-z-0 before:block before:absolute before:aspect-square before:-right-48 before:-top-14 before:rounded-full">
      <img src={bannerImg} alt="banner" className="h-full  z-10 mt-10"/>
    </div>
  );
}
