import styles from "../../styles/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <AiOutlineMenu fill="white" />
      <Link href="/">
        <h1 className={styles.h1}>News Portal</h1>
      </Link>

      <AiOutlineSearch fill="white" />
    </header>
  );
};

export default Header;
