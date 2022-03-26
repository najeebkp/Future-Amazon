import React from "react";
import Head from "next/head";
import HomeFeaturedProducts from "../components/HomeFeaturedProducts";
import ProductListing from "../components/ProductListing";
import PrimaryLayout from "../components/layout/PrimaryLayout";
import { APIFetcher } from "../services/ApiService";
import Loading from "../components/Loading";

export default function Home() {
  const [topFeatured, setTopFeatured] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [productsList, setProductsList] = React.useState([]);
  const [loading, setLoading] = React.useState();

  //setting up productslist
  React.useEffect(() => {
    setLoading(true);
    APIFetcher("")
      .then((response) => {
        let topFeaturedProducts = response.filter((item) => item.top_featured);
        let featuredProducts = response.filter((item) => item.featured);
        setProductsList(response);
        setFeatured(featuredProducts);
        setTopFeatured(topFeaturedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
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
// attaching the children with layout
Home.Layout = PrimaryLayout;
