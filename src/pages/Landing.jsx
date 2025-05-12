import TempNavBar from "../components/TempNavBar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import ProductList from "../components/ProductList";
import Testimonials from "../components/Testimonials";
import RecentlyAdded from "../components/RecentlyAdded";

export const Landing = () => {
  return (
    <>
      <TempNavBar />
      <HeroSection />
      <CategoriesSection />
      <ProductList />
      <Testimonials />
      <RecentlyAdded />
    </>
  );
};
