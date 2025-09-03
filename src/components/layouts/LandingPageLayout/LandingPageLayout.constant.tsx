import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com",
    icon: <FaTiktok />,
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, SOCIAL_ITEMS };
