import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import css from "./Layout.module.scss";
import { Box, Button, Container } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import PropTypes from "prop-types";

export const siteTitle = "DN RENTAL Mobil Jambi";

const Layout = ({ children, home }) => {
  const PHONE = process.env.NEXT_PUBLIC_PHONE;

  return (
    <div className={css.container}>
      <h1 className="hidden">Doni Rental Mobil</h1>
      <Head>
        {/* TODO: UBAH icon */}
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* TODO: UBAH deskripsi */}
        <meta name="description" content="DN RENTAL Mobil Jambi" />
        {/* TODO: UBAH DOMAIN */}
        <meta property="og:site_name" content="bersamaamerta.com" />
        <meta property="og:url" content="bersamaamerta.com" />
        <meta property="og:type" content="article" />
        <meta name="og:title" content={siteTitle} />

        <title>{siteTitle}</title>
      </Head>

      <Navbar home={home} />

      <main>{children}</main>

      <footer>
        <Container maxWidth="lg">
          <Box className={css.footer_inner}>
            <Box>
              <Image
                className={css.footer_logo}
                src="/images/Logo.svg"
                width={40}
                height={40}
                alt="Logo"
              />
            </Box>
            <Box className={css.footer_container}>
              <Link
                href={"https://maps.app.goo.gl/8heLxznKzVP8WNms5?g_st=iw"}
                className={css.footer_content}
              >
                <Image
                  src={"/location.svg"}
                  alt="Location"
                  width={24}
                  height={24}
                />
                <Box>Jl. Srikayangan No. 42, Talang Bakung, Kota Jambi</Box>
              </Link>
              <Link
                href={`tel:+${PHONE}`}
                className={css.footer_content}
              >
                <Image
                  src={"/phone.svg"}
                  alt="Location"
                  width={24}
                  height={24}
                />
                <Box>0823-7957-9333</Box>
              </Link>
            </Box>
          </Box>
        </Container>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  home: PropTypes.bool,
};

Layout.defaultProps = {
  home: false,
};

export default Layout;
