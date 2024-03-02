import HealthCareProducts from "../Components/Home/HealthCareProducts/HealthCareProducts/HealthCareProducts";
import LocationMap from "../Components/Home/LocationMap/LocationMap";
import NaturalSolution from "../Components/Home/NaturalSolution/NaturalSolution";
import WhoWeAre from "../Components/Home/AboutSection/WhoWeAre";
import FeatureProducts from "../Components/Home/FeatureProducts/FeatureProducts";
import NewsLetter from "../Components/Home/NewsLetter/NewsLetter";
import NewArrivals from "../Components/Home/NewArrivals/NewArrivals";
import BestDoctors from "../Components/Home/BestDoctors/BestDoctors";
import Contact from "../Components/Home/Contact/Contact";
import HomeSlider from "../Components/Home/HomeSlider/HomeSlider/HomeSlider";
import NewsAndMedia from "../Components/Home/newAndMedia/NewsAndMedia";
import ShowCase from "../Components/Home/ProductShowcase/ShowCase";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import useGetSeo from "../Hooks/useGetSeo";

const Home = () => {
  const metaData = useGetSeo("home_page");
  return (
    <div>
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
      />
      <HomeSlider />
      <HealthCareProducts />
      <NaturalSolution />
      <WhoWeAre />
      <FeatureProducts />
      <NewsLetter />
      <NewArrivals />
      <BestDoctors />
      {/* <Contact /> */}
      <ShowCase />
      <NewsAndMedia />
      <LocationMap />
    </div>
  );
};

export default Home;
