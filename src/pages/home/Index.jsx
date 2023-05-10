import Location from "../../components/modals/LocationModal";
import Products from "../../components/Products/Index";
import HeroSlider from "../../components/sliders/HeroSlider";
import BannerIndex from "../../components/banners/Banner";
import ProductModal from "../../components/Products/ProductModal";
import BannermiddleIndex from "../../components/banners/Bannermiddle";
import Daily from "../../components/sliders/Daily";
import DruiedsIndex from "../../components/Products/Categories/DruiedsIndex";

const Index = () => {
  return (
    <>
      <Location />
      <HeroSlider />
      <Products />
      <ProductModal />
      {/*
      <BannerIndex />
      <DruiedsIndex />
      <BannermiddleIndex />
      <Daily />
      <ProductModalIndex /> */}
    </>
  );
};

export default Index;
