import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./Armada.module.scss";
import Image from "next/image";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Armada({ showedCar, home }) {
  const WHATSAPP = process.env.NEXT_PUBLIC_WA;
  const { data, error } = useSWR("/api/staticdata", fetcher);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (data) {
      if (showedCar) {
        setCars(data?.cars.slice(0, showedCar));
      } else {
        setCars(data?.cars);
      }
    }
  }, [data]);

  const handleOrder = (car) => {
    let text = `${WHATSAPP}&text=Halo, Saya%20tertarik%20untuk%20menyewa%20mobil%20${car}`;
    return text;
  };

  return (
    <section className={home ? css.wrapper : css.wrapper_2}>
      <h2 className="hidden">Armada</h2>
      <Container maxWidth="lg">
        <Box className={css.container}>
          {home ? (
            <Box textAlign={"center"}>
              <Box className="caption" mb={2}>
                Armada
              </Box>
              <Box className="header-2">Mobil koleksi kami</Box>
            </Box>
          ) : (
            <Box className="header-2" textAlign={"center"}>
              Pilihan Kendaraan untuk Anda
            </Box>
          )}

          <Box className={css.content}>
            {cars?.map((car) => (
              <Box key={car.id} className={css.card}>
                <Box className={css.card_name}>{car.name}</Box>
                <Box className={css.card_image}>
                  <Image
                    key={car.id}
                    src={car.image}
                    alt={car.name}
                    width={245}
                    height={100}
                  />
                </Box>
                <Box className={css.card_bottom}>
                  <Box className={css.card_detail}>
                    <Box className={css.card_detail_container}>
                      <Image
                        src="/transmission.svg"
                        alt="Transmission"
                        width={24}
                        height={24}
                      />
                      <span>{car.transmission}</span>
                    </Box>
                    <Box className={css.card_detail_container}>
                      <Image
                        src="/seat.svg"
                        alt="Seats"
                        width={24}
                        height={24}
                      />
                      <span>{car.seats} Seats</span>
                    </Box>
                    <Box className={css.card_detail_container}>
                      <Image src="/gas.svg" alt="Gas" width={24} height={24} />
                      <span>{car.gas} L</span>
                    </Box>
                  </Box>
                  <Box className={css.card_button}>
                    <Link href={handleOrder(car.name)}>
                      <ButtonMain style={{ width: "100%" }}>
                        Pesan Sekarang
                      </ButtonMain>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {home ? (
            <Box>
              <Link href={"/armada"}>
                <ButtonMain>Lihat Armada</ButtonMain>
              </Link>
            </Box>
          ) : null}
        </Box>
      </Container>
    </section>
  );
}

export default Armada;
