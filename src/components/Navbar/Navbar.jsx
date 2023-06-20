import { Box, Container } from "@mui/material";
import Link from "next/link";
import css from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonMain from "../ButtonMain/ButtonMain";
import PropTypes from "prop-types";

const menus = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Armada",
    link: "/armada",
  },
  // {
  //   name: "Tentang Kami",
  //   link: "/tentang_kami",
  // },
];

const Navbar = ({ home }) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const changeBackground = () => {
    const { scrollY } = window;
    setIsScroll(scrollY > 0 ? true : false);
  };

  const handleResize = () => {
    setIsMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : "auto";
  }, [isMenu]);

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const pathname = router.pathname;
    setCurrentPath(pathname);
  }, [router.isReady]);

  return (
    <nav
      className={`${css.nav__wrapper} ${!home ? css.colors : ""} ${
        isScroll ? css.scrolled : ""
      }`}
    >
      <h2 className="hidden">Navigation</h2>
      <Container maxWidth="lg">
        <Box className={css.nav__container}>
          <Link href={"/"} style={{ display: "flex" }}>
            <Image src="/images/Logo.svg" width={40} height={40} alt="Logo" />
          </Link>

          <Box className={css.nav__bar} onClick={() => setIsMenu(!isMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
            <span>Menu</span>
          </Box>

          <Box className={`${css.nav__menu} ${isMenu ? css.show : ""}`}>
            <Box className={css.nav__close} onClick={() => setIsMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </Box>
            <ul>
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className={`${css.link} ${
                      currentPath === menu.link ? css.active : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={"tel:+62823-7957-9333"}>
                  <ButtonMain styles="outline">Hubungi Kami</ButtonMain>
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {
  home: PropTypes.bool,
};

Navbar.defaultProps = {
  home: false,
};

export default Navbar;
