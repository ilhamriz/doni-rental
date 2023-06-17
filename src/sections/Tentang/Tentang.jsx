import { Box, Container } from "@mui/material";
import React from "react";
import css from "./Tentang.module.scss";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import Image from "next/image";

function Tentang() {
  return (
    <section className={css.wrapper}>
      <h2 className="hidden">Tentang Kami</h2>
      <Container maxWidth="lg">
        <Box className={css.container}>
          <Box className={css.image_container}>
            {/* <Image
              src="/images/about_car.jpg"
              alt="Car Parking"
              width={750}
              height={500}
            /> */}
          </Box>
          <Box className={css.content}>
            <Box className="caption" sx={{ marginBottom: 2 }}>
              Tentang
            </Box>
            <Box className="header-2" sx={{ marginBottom: 4 }}>
              {/* Lebih dari 3500 orang telah menyewa mobil kami */}
              Lebih dari 3500 orang yang telah menyewa
            </Box>
            <p style={{ marginBottom: 40 }}>
              Bergabunglah dengan ribuan pelanggan yang telah puas merasakan
              serunya menyewa salah satu mobil kami! Dengan beragam pilihan
              kendaraan kami, tarif terjangkau, dan layanan pelanggan yang
              sangat baik, Anda akan menikmati pengalaman sewa yang mulus dari
              awal hingga akhir.
            </p>

            <Box>
              <ButtonMain>Lihat Armada</ButtonMain>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Tentang;
