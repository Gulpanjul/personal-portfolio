import NavLink from "../NavLink";

interface PropTypes {
    links: { label: string; href: string }[];
}

const MenuOverlay = ({ links }: PropTypes) => {
  return (
    <ul className="lg:hidden flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.label} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
