import css from "@/styles/Home.module.scss";
import Layout from "@/Layout/Layout";
import { CTA, Hero, Pelayanan, Tentang } from "@/sections";

export default function Home() {
  return (
    <Layout home>
      <Hero />
      <Tentang />
      <Pelayanan />
      <CTA />
    </Layout>
  );
}
