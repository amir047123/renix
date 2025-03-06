import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import HomeAbout from "../Components/Home/About/HomeAbout";
import HomeAppointment from "../Components/Home/Appointment/HomeAppointment";
import FeatureProducts from "../Components/Home/FeatureProducts/FeatureProducts";
import HealthCareProducts from "../Components/Home/HealthCareProducts/HealthCareProducts/HealthCareProducts";
import HealthSolutions from "../Components/Home/HealthSolutions/HealthSolutions";
import Hero from "../Components/Home/Hero/Hero";
import LocationMap from "../Components/Home/LocationMap/LocationMap";
import NaturalSolution from "../Components/Home/NaturalSolution/NaturalSolution";
import NewsAndMedia from "../Components/Home/newAndMedia/NewsAndMedia";
import NewArrivals from "../Components/Home/NewArrivals/NewArrivals";
import NewsLetter from "../Components/Home/NewsLetter/NewsLetter";
import OurAchivement from "../Components/Home/OurAchivement/OurAchivement";
import OurMotto from "../Components/Home/OurMotto/OurMotto";
import ShowCase from "../Components/Home/ProductShowcase/ShowCase";
import Qualities from "../Components/Home/Qualities/Qualities";
import RenixOverview from "../Components/Home/RenixOverview/RenixOverview";
import ResearchDevelopment from "../Components/Home/ResearchDevelopment/ResearchDevelopment";
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
      {/* <WhoWeAre /> */}
      <HomeAbout />
      <RenixOverview />
      <Qualities />
      <SpecializedProducts />
      <ResearchDevelopment />
      {/* <HealthCareProducts /> */}
      {/* <NaturalSolution /> */}
      {/* <FeatureProducts /> */}
      {/* <HealthSolutions /> */}

      {/* <NewArrivals /> */}
      {/* <BestDoctors /> */}
      {/* <Contact /> */}
      {/* <ShowCase /> */}
      <HomeAppointment />
      <OurMotto />
      <OurAchivement />
      <NewsAndMedia />
      <NewsLetter />
      <LocationMap />
    </div>
  );
};

export default Home;
