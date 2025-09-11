import { Header } from "../component/HomePage/header"
import { Banner } from "../component/HomePage/banner"
import { HeroSection } from "../component/HomePage/hero-section"
import { FlashSale } from "../component/HomePage/flash-sale"
import { Categories } from "../component/HomePage/categories"
import { BestSelling } from "../component/HomePage/best-selling"
import { FeaturedProducts } from "../component/HomePage/featured-products"
import { Newsletter } from "../component/HomePage/newsletter"
import { Footer } from "../component/HomePage/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <Header />
      <main>
        <HeroSection />
        <FlashSale />
        <Categories />
        <BestSelling />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
