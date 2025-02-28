import Checkout from "../Components/Checkout/Checkout";
import Blogs from "../Pages/Blogs";
import Conditions from "../Pages/Conditions";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import Team from "../Pages/Gallery/Team/Team";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login/Login";
import RegistrationPage from "../Pages/Login/User/RegistrationPage";
import NewsMedia from "../Pages/NewsMedia";
import Privacy from "../Pages/Privacy";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products";
import Refound from "../Pages/Refound";
import Services from "../Pages/Services";
import PopupMessage from "../Components/PopUp/PopupMessage ";
import BlogSinglePage from "../Pages/ProductDetails/BlogPage/BlogSinglePage";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Appointments from "../Pages/Appointments";
import VerifyEmail from "../Utils/VerifyEmail";
import ResetPassword from "../Components/ResetPassword/ResetPassword";
import InsertOtp from "../Components/ResetPassword/InsertOtp";
import SetNewPassword from "../Components/ResetPassword/NewPassword";
import AppointmentForm from "../Components/AppointmentForm/AppointmentForm";
import AllNews from "../Pages/News/AllNews";
import Shasthokotha from "../Pages/News/Shasthokotha";
import Shosthotarbarta from "../Pages/News/Shosthotarbarta";
import News from "../Pages/News/News";
import Media from "../Pages/News/Media";
import UnderConstruction from "../Components/Upcoming/UnderConstruction";

const PublicRoutes = [
  { path: "/", Component: Home },
  { path: "/security-check", Component: Services },
  { path: "/products", Component: Products },
  { path: "/products/:id", Component: Products },

  { path: "/news-media", Component: NewsMedia },
  { path: "/blogs", Component: Blogs },
  { path: "/contact", Component: Contact },
  { path: "/privacy-policy", Component: Privacy },
  { path: "/refound-return", Component: Refound },
  { path: "/terms-conditions", Component: Conditions },
  { path: "/product/:id", Component: ProductDetails },
  { path: "/Checkout", Component: Checkout },
  { path: "/registration", Component: RegistrationPage },
  { path: "/login", Component: LoginPage },
  { path: "/gallery", Component: Gallery },
  { path: "/team", Component: Team },
  { path: "/appointment", Component: Appointments },
  { path: "/popup", Component: PopupMessage },
  { path: "/blogDetails/:id", Component: BlogSinglePage },
  { path: "/userprofile", Component: UserProfile },
  { path: "/:id/verify", Component: VerifyEmail },
  { path: "/resetPassword", Component: ResetPassword },
  { path: "/insert-token", Component: InsertOtp },
  { path: "/setNewPassword", Component: SetNewPassword },
  { path: "/appointment/:id", Component: AppointmentForm },
  { path: "/allnews", Component: AllNews },
  { path: "/shasthokotha", Component: Shasthokotha },
  { path: "/shosthotarbarta", Component: Shosthotarbarta },
  { path: "/news", Component: News },
  { path: "/media", Component: Media },
  { path: "/upcoming", Component: UnderConstruction },
];

export default PublicRoutes;
