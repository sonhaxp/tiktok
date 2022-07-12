//layouts
import { HeaderOnly } from "~/layouts";
import config from "~/config";
//pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Live from "~/pages/Live";
//Public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live },
];

//Privat Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
