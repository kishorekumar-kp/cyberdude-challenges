import Card from "../components/Card";
import variants from "../assets/variants.json";

const CardPage = () => {
  return (
    <div>
      <div>
        <h1 className="p-4 mt-5 text-2xl font-semibold text-center">
          Card components
        </h1>
        <div className="max-w-2xl p-5 m-auto grid grid-cols-2 gap-3">
          {variants.map((variant) => {
           return <Card variant={variant}  key={variant.id}  />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardPage;
