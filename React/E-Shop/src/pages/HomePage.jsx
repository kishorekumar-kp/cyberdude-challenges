import ItemsCard from "../components/ItemsCard"
import products from "../assets/products.json"

const HomePage = () => {
    console.log(products);
  return (
    <div>
        <ItemsCard/>
    </div>
  )
}

export default HomePage