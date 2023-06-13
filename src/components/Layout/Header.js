import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
