import './App.css'
import LatestRecipe from './components/latest_recipe/LatestRecipe'
import ProductBanner from './components/product_banner/ProductBanner'
import ProductCard from './components/product_card/ProductCard'

function App() {

  return (
    <>
      <section className='container'>
        <ProductBanner />
        <LatestRecipe />
      </section>
    </>
  )
}

export default App
