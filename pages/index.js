import Head from "next/head";
import HomeFeaturedProducts from "../components/HomeFeaturedProducts";
import PrimaryLayout from "../components/layout/PrimaryLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Future Amazon Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomeFeaturedProducts></HomeFeaturedProducts>
      </div>
    </div>
  );
}
// attaching the children with layout
Home.Layout = PrimaryLayout;
