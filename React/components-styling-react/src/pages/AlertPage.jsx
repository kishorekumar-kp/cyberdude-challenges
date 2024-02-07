import Alert from "../components/Alert";
import variants from "../assets/variants.json"

const AlertPage = () => {
  return (
    <div>
      <div>
        <h1 className="p-4 mt-5 text-2xl font-semibold text-center">
          Alert components
        </h1>
        <div className="max-w-2xl m-auto py-2 my-5 space-y-5">
          {variants.map((variant) => (
            <Alert variant={variant} key={variant.id} />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
