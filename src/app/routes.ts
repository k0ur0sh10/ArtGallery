import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { PaintingDetail } from "./pages/PaintingDetail";
import { Cart } from "./pages/Cart";
import { Events } from "./pages/Events";
import { EventDetail } from "./pages/EventDetail";
import { About } from "./pages/About";
import { Newsletter } from "./pages/Newsletter";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminPaintings } from "./pages/admin/AdminPaintings";
import { AdminEvents } from "./pages/admin/AdminEvents";
import { AdminOrders } from "./pages/admin/AdminOrders";
import { AdminSubscribers } from "./pages/admin/AdminSubscribers";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: "collection", Component: Collection },
        { path: "painting/:id", Component: PaintingDetail },
        { path: "cart", Component: Cart },
        { path: "events", Component: Events },
        { path: "events/:id", Component: EventDetail },
        { path: "about", Component: About },
        { path: "newsletter", Component: Newsletter },
        { path: "order-confirmation", Component: OrderConfirmation },
      ],
    },
    {
      path: "/admin",
      Component: AdminLayout,
      children: [
        { index: true, Component: AdminDashboard },
        { path: "paintings", Component: AdminPaintings },
        { path: "events", Component: AdminEvents },
        { path: "orders", Component: AdminOrders },
        { path: "subscribers", Component: AdminSubscribers },
      ],
    },
  ],
  {
    basename: "/ArtGallery", // ✅ IMPORTANT for GitHub Pages project sites
  }
);