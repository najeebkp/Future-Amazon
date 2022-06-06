import React from "react";
import Head from "next/head";
import HomeFeaturedProducts from "../components/HomeFeaturedProducts";
import ProductListing from "../components/ProductListing";
import PrimaryLayout from "../components/layout/PrimaryLayout";
import { APIFetcher } from "../services/ApiService";
import Loading from "../components/Loading";

export default function Home({ data }) {
  const [topFeatured, setTopFeatured] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [productsList, setProductsList] = React.useState([]);
  const [loading, setLoading] = React.useState();

  //setting up productslist
  React.useEffect(() => {
    setLoading(true);
    if (data) {
      let topFeaturedProducts = data.filter((item) => item.top_featured);
      let featuredProducts = data.filter((item) => item.featured);
      setProductsList(data);
      setFeatured(featuredProducts);
      setTopFeatured(topFeaturedProducts);
      setLoading(false);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Future Amazon Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <>
          {!loading ? (
            <>
              <HomeFeaturedProducts
                topFeatured={topFeatured}
                featured={featured}
                productsList={productsList}
              ></HomeFeaturedProducts>

              <ProductListing
                productsList={productsList && productsList}
              ></ProductListing>
            </>
          ) : (
            <Loading />
          )}
        </>
      </div>
    </div>
  );
}

// server side rendering
Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://future-amazon-backend.vercel.app");
  const json = await res.json();
  return { data: json };
};
// attaching the children with layout
Home.Layout = PrimaryLayout;
