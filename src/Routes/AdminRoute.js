import AdminShipping from "../Components/AdminDashbord/AdminShipping/AdminShipping";
import ContactRenix from "../Components/AdminDashbord/ContactRenix";
import NewsAndMedia from "../Components/Home/newAndMedia/NewsAndMedia";
import AllAccounts from "../Pages/AllAccounts/AllAccounts";
import AddNewsAndMedia from "../Pages/News and Media/AddNewsAndMedia";
import AddNewsCategory from "../Pages/News and Media/AddNewsCategory";
import AllNewsAndMedias from "../Pages/News and Media/AllNewsAndMedias";
import UpdateNewsAndMedias from "../Pages/News and Media/UpdateNewsAndMedias";
import AddBlog from "../Pages/blog/AddBlog";
import AddBlogCategory from "../Pages/blog/AddBlogCategory";
import AllBlogs from "../Pages/blog/AllBlogs";
import AllBlogsCategory from "../Pages/blog/AllBlogsCategory";
import Dashboard from "../Pages/dashboard/AdminDashboardOverview";
import AddDoctor from "../Pages/doctors/AddDoctor";
import AllDoctors from "../Pages/doctors/AllDoctors";
import AllEmails from "../Pages/email/AllEmails";
import AddMedicine from "../Pages/medicine/AddMedicine";
import AddMedicineCategory from "../Pages/medicine/AddMedicineCategory";
import UpdateMedicineCategory from "../Pages/medicine/UpdateMedicineCategory";
import AllMedicineCategories from "../Pages/medicine/AllMedicineCategories";
import AllMedicines from "../Pages/medicine/AllMedicines";
import UpdateMedicine from "../Pages/medicine/UpdateMedicine";
import ConfirmedOrders from "../Pages/orders/ConfirmedOrders";
import OrderOverview from "../Pages/orders/OrderOverview";
import PendingOrders from "../Pages/orders/PendingOrders";
import RejectedOrders from "../Pages/orders/RejectedOrders";
import ViewOrder from "../Pages/orders/ViewOrder";
import UpdateBlogCategory from "../Pages/blog/UpdateBlogCategory";
import UpdateBlog from "../Pages/blog/UpdateBlog";
import AdminAllSeoList from "../Components/AdminDashbord/AdminSeo/AdminAllSeoList";
import AdminSeo from "../Components/AdminDashbord/AdminSeo/AdminSeo";
import AdminUpdateSeoList from "../Components/AdminDashbord/AdminSeo/AdminUpdateSeoList";

const AdminRoutes = [
  { path: "overview", Component: Dashboard },
  { path: "medicine/addMedicineCategory", Component: AddMedicineCategory },
  { path: "medicine/allMedicineCategory", Component: AllMedicineCategories },
  { path: "medicine/addMedicine", Component: AddMedicine },
  { path: "medicine/allMedicines", Component: AllMedicines },
  { path: "orderOverview", Component: OrderOverview },
  { path: "orders/pendingOrders", Component: PendingOrders },
  { path: "orders/confirmedOrders", Component: ConfirmedOrders },
  { path: "orders/rejectedOrders", Component: RejectedOrders },
  { path: "news-media/addNewsCategory", Component: AddNewsCategory },
  { path: "news-media/addNewsandMedia", Component: AddNewsAndMedia },
  { path: "news-media/allNewsandMedia", Component: AllNewsAndMedias },
  { path: "blog/addBlog", Component: AddBlog },
  { path: "blog/addBlogCategory", Component: AddBlogCategory },
  { path: "blog/updateCategory/:id", Component: UpdateBlogCategory },
  { path: "blog/allBlogCategory", Component: AllBlogsCategory },
  { path: "blog/allBlogs", Component: AllBlogs },
  {
    path: "blog/allBlogs/edit-blog/:id",
    Component: UpdateBlog,
  },
  { path: "doctor/addDoctor", Component: AddDoctor },
  { path: "doctor/allDoctors", Component: AllDoctors },
  { path: "email/allEmails", Component: AllEmails },
  { path: "allAccounts", Component: AllAccounts },
  { path: "admin-contact", Component: ContactRenix },
  {
    path: "medicine/allMedicines/edit-medicine/:id",
    Component: UpdateMedicine,
  },
  {
    path: "medicine/updateCategory/:id",
    Component: UpdateMedicineCategory,
  },
  { path: "view-order/:id", Component: ViewOrder },

  { path: "shipping", Component: AdminShipping },
  { path: "add-news-media", Component: AddNewsAndMedia },
  { path: "all-news-media", Component: AllNewsAndMedias },
  { path: "add-seo", Component: AdminSeo },
  { path: "all-seo", Component: AdminAllSeoList },
  { path: "update-seo/:id", Component: AdminUpdateSeoList },
  {
    path: "all-news-media/update-news-media/:id",
    Component: UpdateNewsAndMedias,
  },
];

export default AdminRoutes;
