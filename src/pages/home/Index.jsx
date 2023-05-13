import DryFruits from "../../components/Products/DryFruits";
import HeroSlider from "../../components/sliders/HeroSlider";
import Banner from "../../components/banners/Banner";
import PackageProduct from "../../components/Products/PackageProduct";
import Bannermiddle from "../../components/banners/Bannermiddle";
import Jams from "../../components/Products/Jams";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <DryFruits />
      <Banner />
      <PackageProduct />
      <Bannermiddle />
      <Jams />
      <Helmet>
        <title>OFA MMC</title>
      </Helmet>
    </>
  );
};

export default Index;
