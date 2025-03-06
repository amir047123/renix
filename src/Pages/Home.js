import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import HomeAbout from "../Components/Home/About/HomeAbout";
import HomeAppointment from "../Components/Home/Appointment/HomeAppointment";
import Hero from "../Components/Home/Hero/Hero";
import LocationMap from "../Components/Home/LocationMap/LocationMap";
import NewsAndMedia from "../Components/Home/newAndMedia/NewsAndMedia";
import NewsLetter from "../Components/Home/NewsLetter/NewsLetter";
import OurAchivement from "../Components/Home/OurAchivement/OurAchivement";
import OurMotto from "../Components/Home/OurMotto/OurMotto";
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
