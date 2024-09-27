import { ContentSection } from "@/components/content-section";
import { ImgSection } from "@/components/Img-section";
import chef from "@/assets/imgs/chef.png";
import chef2 from "@/assets/imgs/chef2.png";
import food3 from "@/assets/imgs/food3.png";

export default function AboutUs() {
  return (
    <section className="py-24">
      <div className="container md:space-y-24 space-y-10 ">
        <div className="grid grid-cols-12 items-center lg:space-y-24 lg:gap-16">
          <ImgSection img={chef2} direction="end" />
          <ContentSection colWidth="5">
            <h4 className="lg:text-7xl text-5xl font-tinos font-semibold">
              <span className="capitalize text-primaryOrange font-bold lg:block">
                Our
              </span>{" "}
              resturant
            </h4>
            <p className="leading-loose opacity-80  font-light text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
          </ContentSection>
        </div>
        <div className="grid grid-cols-12 items-center space-y-24 lg:gap-16 ">
          <ContentSection colWidth="5" order="inverse">
            <p className="leading-loose opacity-80  font-light text-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </ContentSection>
          <ImgSection img={food3} direction="start" order="inverse" />
        </div>
        <div className="grid grid-cols-12 items-center lg:space-y-24 lg:gap-16">
          <div className="lg:col-span-6 col-span-12 justify-center flex lg:pb-0 pb-10">
            <img src={chef} alt="chef" className="rounded-2xl lg:rounded-none"/>
          </div>
          <ContentSection colWidth="6">
            <h4 className="lg:text-7xl text-5xl font-tinos font-semibold">
              <span className="capitalize text-primaryOrange font-bold block">
                Owner
              </span>{" "}
              & Executive Chef
            </h4>
            <span className="text-3xl font-semibold capitalize">
              Ismail Marzuki
            </span>
            <p className="leading-loose italic opacity-80 font-light md:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ContentSection>
        </div>
      </div>
    </section>
  );
}
