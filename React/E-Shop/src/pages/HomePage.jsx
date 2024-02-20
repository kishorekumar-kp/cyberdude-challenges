import ItemsCard from "../components/ItemsCard";
import products from "../assets/products.json";

const HomePage = () => {


  return products.map((product, index) => {
    const { brand, type, price, img } = product;
    return (
      <div className="" key={index}>
        <ItemsCard brand={brand} type={type} price={price} img={img}/>
      </div>

    );
  });
};

export default HomePage;
