import ItemsCard from "../components/ItemsCard";
import products from "../assets/products.json";

const HomePage = () => {
  return (
    <div className="grid grid-cols-4">
      {products.map((product, index) => {
        const { brand, type, price, img } = product;
        return (
          <div  key={index}>
            <ItemsCard brand={brand} type={type} price={price} img={img} />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
