import Profile from "../Pages/AboutUs/Profile";
import Mission from "../Pages/AboutUs/Mission";
import Responsibility from "../Pages/AboutUs/Responsibility";
import Message from "../Pages/AboutUs/Message";
import About from "../Pages/About";
import OurPeople from "../Pages/AboutUs/OurPeople";
import Ceo from "../Pages/AboutUs/Ceo";

export const aboutRoutes = [
  //{ path: "/about", Component: About },
  { path: "/about", Component: Profile },
  { path: "company-profile", Component: Profile },
  { path: "mission-vission", Component: Mission },
  { path: "corporate-social-responsibility", Component: Responsibility },
  { path: "message-from-managing-director", Component: Message },
  { path: "our-people", Component: OurPeople },
  { path: "ceo", Component: Ceo },
];
