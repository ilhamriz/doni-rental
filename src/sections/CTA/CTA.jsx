import { Box, Container } from "@mui/material";
import React from "react";
import css from "./CTA.module.scss";
import ButtonMain from "../../components/ButtonMain/ButtonMain";

function CTA() {
  return (
    <section className={css.wrapper}>
      <Container maxWidth="lg">
        <Box className={css.container}>
          <Box className="header-2" style={{ color: "#fff" }}>
            Ambil Kemudi dan Berjelajah Bersama Kami Hari Ini!
          </Box>
          <Box>
            <ButtonMain styles="dark">Pesan sekarang</ButtonMain>
            <ButtonMain styles="transparent">Lihat armada</ButtonMain>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default CTA;
