import { useTranslation } from "react-i18next";
import DryFruits from "../../components/Products/DryFruits";
import HeroSlider from "../../components/sliders/HeroSlider";
import PackageProduct from "../../components/Products/PackageProduct";
import Bannermiddle from "../../components/banners/Bannermiddle";
import Jams from "../../components/Products/Jams";
import { Helmet } from "react-helmet";

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroSlider />
      <DryFruits />
      <PackageProduct />
      <Bannermiddle />
      <Jams />
      <Helmet>
        <title>{t("ofaMMC")}</title>
      </Helmet>
    </>
  );
};

export default Index;
