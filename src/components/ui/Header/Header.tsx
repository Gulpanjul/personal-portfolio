interface PropTypes {
  children: React.ReactNode;
}

const Header = (props: PropTypes) => {
  const { children } = props;
  return <h1>{children}</h1>;
};

export default Header;
