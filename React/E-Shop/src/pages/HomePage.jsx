import ItemsCard from "../components/ItemsCard";
import products from "../assets/products.json";

const HomePage = () => {
  console.log(products);
  products.map((product, index) => {
    const { brand, type, price, img } = product;
    // console.log(product);
    return (
      <>
      {console.log(product)}
        <ItemsCard
          key={index}
          brand={brand}
          type={type}
          price={price}
          img={img}
        />
      </>
    );
  });
};
export default HomePage;
