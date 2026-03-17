import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { lazy, Suspense } from "react";
/* import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/pages/Register";
import Career from "./components/pages/Career";
import ErrorPage from "./components/pages/ErrorPage";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import Youtube from "./components/pages/Youtube";
import Music from "./components/pages/Music";
import Technology from "./components/pages/Technology";
import News from "./components/pages/News"; */

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Register = lazy(() => import("./components/pages/Register"));
const Career = lazy(() => import("./components/pages/Career"));
const Products = lazy(() => import("./components/pages/Products"));
const ProductDetails = lazy(() => import("./components/pages/ProductDetails"));
const Youtube = lazy(() => import("./components/pages/Youtube"));
const Music = lazy(() => import("./components/pages/Music"));
const Technology = lazy(() => import("./components/pages/Technology"));
const News = lazy(() => import("./components/pages/News"));
const ErrorPage = lazy(() => import("./components/pages/ErrorPage"));
const ErrorBoundary = lazy(()=>import('./components/ErrorBoundary'))

const App = () => {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
      <Suspense fallback={<h2>Loading......</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/career" element={<Career />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/youtube" element={<Youtube />}>
            <Route path="/youtube/music" element={<Music />} />
            <Route path="/youtube/technology" element={<Technology />} />
            <Route path="/youtube/news" element={<News />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
