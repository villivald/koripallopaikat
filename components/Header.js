import Link from "next/link";
import { useRouter } from "next/router";
import headerData from "../data/headerData";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav>
        {headerData.map((item) => {
          return (
            <Link key={item.text} href={item.link}>
              <a
                className={
                  router.pathname == item.link ? "active" : "linkContainer"
                }
              >
                {item.icon}
                {item.text}
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
