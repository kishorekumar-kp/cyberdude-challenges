import Buttons from "../components/Buttons";
import variants from "../assets/variants.json";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <h1 className="p-4 mt-5 text-2xl font-semibold text-center">
          Buttons components
        </h1>
        <div className="max-w-2xl m-auto py-5 my-5 grid grid-cols-4 gap-4">
          {variants.map((variant) => (
            <Buttons variant={variant} key={variant.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
