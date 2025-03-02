import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import WhoWeAre from "../Components/Home/AboutSection/WhoWeAre";
import FeatureProducts from "../Components/Home/FeatureProducts/FeatureProducts";
import HealthCareProducts from "../Components/Home/HealthCareProducts/HealthCareProducts/HealthCareProducts";
import Hero from "../Components/Home/Hero/Hero";
import LocationMap from "../Components/Home/LocationMap/LocationMap";
import NaturalSolution from "../Components/Home/NaturalSolution/NaturalSolution";
import NewsAndMedia from "../Components/Home/newAndMedia/NewsAndMedia";
import NewArrivals from "../Components/Home/NewArrivals/NewArrivals";
import NewsLetter from "../Components/Home/NewsLetter/NewsLetter";
import ShowCase from "../Components/Home/ProductShowcase/ShowCase";
import RenixOverview from "../Components/Home/RenixOverview/RenixOverview";
import SpecializedProducts from "../Components/Home/SpecializedProducts/SpecializedProducts";
import useGetSeo from "../Hooks/useGetSeo";

const Home = () => {
  const metaData = useGetSeo("home_page");
  return (
    <div>
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />
      <Hero />
      {/* <HomeSlider /> */}
      <RenixOverview />
      <SpecializedProducts />
      <HealthCareProducts />
      <NaturalSolution />
      <WhoWeAre />
      <FeatureProducts />
      <NewArrivals />
      {/* <BestDoctors /> */}
      {/* <Contact /> */}
      <ShowCase />
      <NewsAndMedia />
      <NewsLetter />
      <LocationMap />
    </div>
  );
};

export default Home;
