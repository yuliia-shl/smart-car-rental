import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default AppBar;
