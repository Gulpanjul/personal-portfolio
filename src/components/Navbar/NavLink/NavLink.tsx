import Link from "next/link";

interface PropTypes {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: PropTypes) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-muted-foreground sm:text-xl rounded md:p-0 hover:text-primary"
    >
      {title}
    </Link>
  );
};

export default NavLink;
