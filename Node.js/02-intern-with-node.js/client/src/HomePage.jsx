import InternCard from "./components/InternCard";
// import datas from "./assets/information.json";
import { useEffect, useState } from "react";

function HomePage() {
  const [internData, setInternData] = useState([]);

  useEffect(() => {
    async function internApi() {
      const fetchIntern = await fetch("/api");
      const allData = await fetchIntern.json();

      console.log(allData);
      setInternData(allData);
    }
    internApi();
  }, []);

  return (
    <div>
      {internData.map((datas, index) => {
        const { Name, role, gitName, email } = datas;
        return (
          <InternCard
            key={index}
            className="grid grid-cols-4"
            name={Name}
            role={role}
            gitName={gitName}
            email={email}
          />
        );
      })}
      {/* {datas.length != 0
        ? datas.map((intern, index) => {
            return (
              <InternCard
                key={index}
                name={intern.Name}
                role={intern.role}
                gitName={intern.gitName}
                email={intern.email}
              />
            );
          })
        : []} */}
    </div>
  );
}

export default HomePage;
