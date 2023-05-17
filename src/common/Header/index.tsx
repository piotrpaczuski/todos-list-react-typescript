interface HeaderProps {
  header: string;
}

const Header = ({ header }: HeaderProps) => (
  <header>
    <h1>{header}</h1>
  </header>
);

export default Header;
