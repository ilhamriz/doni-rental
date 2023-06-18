import css from "@/styles/Home.module.scss";
import Layout from "@/Layout/Layout";
import { Armada, CTA, Hero, Pelayanan, Tentang } from "@/sections";

export default function Home() {
  return (
    <Layout home>
      <Hero />
      <Tentang />
      <Pelayanan />
      <Armada showedCar={8} home />
      <CTA />
    </Layout>
  );
}
