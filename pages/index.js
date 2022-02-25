import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import BottomNav from "../components/BottomNav";
import HomeFeaturedProducts from "../components/HomeFeaturedProducts";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Future Amazon Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="homepage">
        <NavBar></NavBar>
        <HomeFeaturedProducts></HomeFeaturedProducts>
        <BottomNav></BottomNav>
      </div>
    </div>
  );
}
