import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { SiInstagram, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const socialMedia = [
  {
    id: 1,
    icon: <FaTwitter />,
    title: "twitter",
    path: "/twitter",
  },
  {
    id: 2,
    icon: <SiInstagram />,
    title: "instagram",
    path: "/instagram",
  },
  {
    id: 3,
    icon: <FaFacebookF />,
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
