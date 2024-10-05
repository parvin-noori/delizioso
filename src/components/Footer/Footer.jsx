import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { FaInstagram, FaTwitter } from "react-icons/fa6";
// import { SiInstagram, SiTwitter } from "react-icons/si";
// import { FaFacebookF } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const socialMedia = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
      </svg>
    ),
    title: "twitter",
    path: "/twitter",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
    title: "instagram",
    path: "/instagram",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    ),
    title: "facebook",
    path: "/facebook",
  },
];

export default function Footer() {
  return (
    <div className="bg-brown text-white py-32">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="space-y-10">
            <NavLink to="/" className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/sdf.png" />
                <AvatarFallback className="text-ba">D</AvatarFallback>
              </Avatar>
              <span className="capitalize font-semibold">
                delizi<span className="text-primaryOrange">oso</span>
              </span>
            </NavLink>
            <p>
              Viverra gravida morbi egestas facilisis tortor netus non duis
              tempor.
            </p>
            <ul className="socialMedia flex items-center gap-3">
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="bg-white size-8 flex items-center justify-center rounded-full text-black"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 grid lg:grid-cols-3 space-y-10 lg:space-y-0">
            <div className="capitalize">
              <h1 className="text-xl font-semibold text-primaryOrange">page</h1>
              <ul className="space-y-4 mt-8">
                <li className="footer-link">
                  <a href="#">Home</a>
                </li>
                <li className="footer-link">
                  <a href="#">menu</a>
                </li>
                <li className="footer-link">
                  <a href="#">order online</a>
                </li>
                <li className="footer-link">
                  <a href="#">catering</a>
                </li>
                <li className="footer-link">
                  <a href="#">reservation</a>
                </li>
              </ul>
            </div>
            <div className="capitalize">
              <h1 className="text-xl font-semibold text-primaryOrange">
                information
              </h1>
              <ul className="space-y-4 mt-8">
                <li className="footer-link">
                  <a href="#">about us</a>
                </li>
                <li className="footer-link">
                  <a href="#">testimonial</a>
                </li>
                <li className="footer-link">
                  <a href="#">event</a>
                </li>
              </ul>
            </div>
            <div className="capitalize">
              <h1 className="text-xl font-semibold text-primaryOrange">
                get in touch
              </h1>
              <ul className="space-y-4 mt-8">
                <li>
                  <p>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                </li>
                <li>
                  <a href="mailto:delizioso@gmail.com">delizioso@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+123 4567 8901">+123 4567 8901</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
