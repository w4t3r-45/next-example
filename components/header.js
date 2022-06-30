import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

const HEADER_CONFIG = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "Search",
    url: "/",
  },
  {
    title: "Login",
    url: "/",
  },
];

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <Image src="/images/logo.svg" width={120} height={40} />
      <div>
        {HEADER_CONFIG.map((item, index) => (
          <Link key={`hdr_lnk${index}`} href={item.url}>
            <a className={styles.header_link}>{item.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
