"use client";

import Link from "next/link";
import styles from "../../navbar.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        className={`${styles.highlight} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
