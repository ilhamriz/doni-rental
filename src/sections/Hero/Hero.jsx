import Image from "next/image";
import css from "./Hero.module.scss";
import { Box, Container, Typography } from "@mui/material";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import Link from "next/link";

const cars_logo = [
  {
    file: "/images/cars_logo/mitsubishi.svg",
    alt: "Mitsubishi",
    width: 58,
    height: 50,
  },
  {
    file: "/images/cars_logo/toyota.svg",
    alt: "Toyota",
    width: 62,
    height: 40,
  },
  {
    file: "/images/cars_logo/daihatsu.svg",
    alt: "Daihatsu",
    width: 75,
    height: 29,
  },
  {
    file: "/images/cars_logo/honda.svg",
    alt: "Honda",
    width: 58,
    height: 50,
  },
  {
    file: "/images/cars_logo/nissan.svg",
    alt: "Nissan",
    width: 61,
    height: 50,
  },
  {
    file: "/images/cars_logo/suzuki.svg",
    alt: "Suzuki",
    width: 49,
    height: 50,
  },
];

function Hero() {
  const CHAT = process.env.NEXT_PUBLIC_CHAT;

  return (
    <section className={css.wrapper}>
      <Container maxWidth="lg">
        <Box className={css.container}>
          <Box className={css.content}>
            <Typography variant="h2" className={css.title}>
              Cari rental mobil yang mudah dan murah?
            </Typography>
            <p>
              Jangan biarkan persewaan mobil menjadi menegangkan dari rencana
              perjalanan Anda. Percayakan kepada kami untuk memberi Anda
              pengalaman persewaan mobil dah mudah dan murah.
            </p>

            <Box className={css.btn_wrapper}>
              <Link href={CHAT}>
                <ButtonMain styles="secondary">Pesan sekarang</ButtonMain>
              </Link>
              <Link href={"/armada"}>
                <ButtonMain styles="transparent">Lihat armada</ButtonMain>
              </Link>
            </Box>
          </Box>
          <Box className={css.cars_logo_container}>
            <Box className={css.cars_logo_content}>
              {cars_logo.map((val, index) => (
                <Image
                  key={index}
                  src={val.file}
                  alt={val.alt}
                  width={val.width}
                  height={val.height}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Hero;
