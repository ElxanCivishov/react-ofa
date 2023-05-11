import Location from "../../components/modals/LocationModal";
import Products from "../../components/Products/Index";
import HeroSlider from "../../components/sliders/HeroSlider";
import Banner from "../../components/banners/Banner";
import PackageProduct from "../../components/packageProducts/PackageProduct";
import Bannermiddle from "../../components/banners/Bannermiddle";
import Daily from "../../components/sliders/Daily";

const Index = () => {
  return (
    <>
      <Location />
      <HeroSlider />
      <Products />
      <Banner />
      <PackageProduct />
      <Bannermiddle />
      <Daily />
    </>
  );
};

export default Index;
