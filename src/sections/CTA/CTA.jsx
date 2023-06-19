import { Box, Container } from "@mui/material";
import React from "react";
import css from "./CTA.module.scss";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import Link from "next/link";

function CTA() {
  const title = "Ambil Kemudi dan Berjelajah Bersama Kami Hari Ini!";
  const CHAT = process.env.NEXT_PUBLIC_CHAT;

  return (
    <section className={css.wrapper}>
      <h2 className="hidden">{title}</h2>
      <Container maxWidth="lg">
        <Box className={css.container}>
          <Box className="header-2" style={{ color: "#fff" }}>
            {title}
          </Box>
          <Box>
            <Link href={CHAT}>
              <ButtonMain styles="dark">Pesan Sekarang</ButtonMain>
            </Link>
            <Link href={"/armada"}>
              <ButtonMain styles="transparent">Lihat Armada</ButtonMain>
            </Link>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default CTA;
