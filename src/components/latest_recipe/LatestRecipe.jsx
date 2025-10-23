import ProductCard from '../product_card/ProductCard'
import './style.scss'

const productData = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        image: '/Image.png'
    },
    {
        id: 2,
        title: 'Spaghetti asfdasfasf',
        image: '/Image2.png'
    },
    {
        id: 3,
        title: 'asdasdsa rfas',
        image: '/Image3.png'
    },
   

]

export default function LatestRecipe() {

    return (
        <div className='latest_recipe'>
            <h1>Last Recipes</h1>
            <div className="content">
                {
                    productData.map(item => (
                        <ProductCard key={item.id} title={item.title} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}
