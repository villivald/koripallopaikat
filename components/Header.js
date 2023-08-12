import Link from "next/link";
import { useRouter } from "next/router";

import headerData from "../data/headerData";

import styles from "../css/Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <header>
        <nav>
          {headerData.map((item) => {
            return (
              <Link
                key={item.text}
                href={item.link}
                className={
                  router.pathname == item.link
                    ? styles.active
                    : styles.linkContainer
                }
              >
                {item.icon}
                {item.text}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}
