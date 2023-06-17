import { Box, Container } from "@mui/material";
import css from "./Pelayanan.module.scss";
import Image from "next/image";

const cards = [
  {
    title: `Supir Berpengalaman`,
    subtitle: `Kami memiliki supir-supir yang telah terlatih, berpengalaman,
    dan mengenal banyak wilayah.`,
    image: "/images/pelayanan/pelayanan_1.png",
    alt: "Berpengalaman",
  },
  {
    title: `Rutin Dirawat`,
    subtitle: `Kami selalu memberikan perawatan pada mobil, sehingga kamu dapat menggunakannya dengan tenang.`,
    image: "/images/pelayanan/pelayanan_2.png",
    alt: "Rutin Dirawat",
  },
  {
    title: `Cepat dan Aman`,
    subtitle: `Proses rental mobil yang mudah, cukup hubungi kami dan transaksi selesai dalam 24 jam.`,
    image: "/images/pelayanan/pelayanan_3.png",
    alt: "Cepat dan Aman",
  },
];

function Pelayanan() {
  return (
    <section className={css.wrapper}>
      <h2 className="hidden">Pelayanan</h2>
      <Container maxWidth="lg">
        <Box className={css.container}>
          <Box className={css.background} />

          <Box className={css.title_wrapper}>
            <Box className="caption" sx={{ marginBottom: 2 }}>
              Pelayanan
            </Box>
            <Box className={`header-2 ${css.title}`}>
              Kami memiliki layanan mobil sewa terbaik
            </Box>
            <p>
              Staf kami yang ramah dan beragam pilihan kendaraan berkualitas
              tinggi membuat menyewa mobil bersama kami menjadi mudah dan bebas
              stres.
            </p>
          </Box>
          <Box className={css.content}>
            {cards.map((card, index) => (
              <Box key={index} className={css.card}>
                <Box sx={{ marginBottom: 4 }}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className="header-4" sx={{ marginBottom: 2 }}>
                  {card.title}
                </Box>
                <p>{card.subtitle}</p>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Pelayanan;
