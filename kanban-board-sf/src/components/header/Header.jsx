import Avatar from "../../assets/img/avatar.svg";
import ArrowUp from "../../assets/img/arrow-up.svg";
import ArrowDown from "../../assets/img/arrow-down.svg";
import DropArrow from "../../assets/img/drop-menu-arrow.svg";
import css from "./Header.module.css";
import { useState } from "react";

const ProfileArrow = (props) => {
  if (props.isMenuOpened) {
    return (
      <>
        <img src={ArrowUp} alt="Arrow Up" />
        <img src={DropArrow} alt="Drop Arrow" className={css.dropArrow} />
        <div className={css.dropMenu} value="menu" size="2" readOnly>
          <button className={css.dropMenuButton}> Profile </button>
          <button className={css.dropMenuButton}> Log Out</button>
        </div>
      </>
    );
  } else {
    return <img src={ArrowDown} alt="Arrow Down" />;
  }
};

const Header = () => {
  const [isMenuOpened, updateMenuState] = useState(false);

  return (
    <header className={css.header}>
      <div className={`${css.title} ${css.desctop}`}>Awesome Kanban Board</div>
      <div
        className={css.userProfile}
        onClick={() => updateMenuState(!isMenuOpened)}
      >
        <img className={css.avatar} src={Avatar} alt="user avatar"></img>

        <ProfileArrow isMenuOpened={isMenuOpened} />
      </div>
    </header>
  );
};

export default Header;
