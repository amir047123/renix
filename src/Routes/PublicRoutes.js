import Checkout from "../Components/Checkout/Checkout";
import About from "../Pages/About";
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

const PublicRoutes = [
  { path: "/", Component: Home },
  { path: "/security-check", Component: Services },
  { path: "/products", Component: Products },
  { path: "/news-media", Component: NewsMedia },
  { path: "/blogs", Component: Blogs },
  { path: "/contact", Component: Contact },
  { path: "/privacy-policy", Component: Privacy },
  { path: "/refound-return", Component: Refound },
  { path: "/terms-conditions", Component: Conditions },
  { path: "/products/:id", Component: ProductDetails },
  { path: "/Checkout", Component: Checkout },
  {path : "/registration",Component: RegistrationPage },
  {path: "/login", Component:LoginPage},
  {path: "/gallery",Component:Gallery},
  {path:"/team",Component:Team},

];

export default PublicRoutes;
