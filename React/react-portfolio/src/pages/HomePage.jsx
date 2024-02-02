import hero from "../../public/image/bgimg.png";
import archer from "../../public/image/archer.png";
const HomePage = () => {
  return (
    <div className="px-60">
      <div className=" flex justify-around my-10">
        <div className="w-1/2 items-center space-y-3 mt-10">
          <h1 className="text-lg font-semibold">
            I am Kishorekumar
            <br /> A Junior MERN Stack Developer
          </h1>
          <p className="">
            As developers, we are constructing new things every day. Each line
            of code is another building block. .We might be adding new features
            or solving bugs every day.
          </p>
          <div className="space-x-5">
          <button className="py-1 px-2 rounded-xl bg-dark text-white hover:bg-medium ">Hire Me! ❤️</button>
          <button className="py-1 px-2 rounded-xl bg-dark text-white hover:bg-medium">View my projects ➡️</button>
          </div>
        </div>
        <div className="">
          <img
            alt="hero"
            src={hero}
            width={350}
            height={300}
            style={{ filter: "drop-shadow(5px 5px 10px #000)" }}
            className="w-72 h-72"
          />
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2">
          <img  alt="" src={archer} width={400} height={250} className="img1" />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col space-x- mt-5 p-2 ">
            <h2 className="text-xl font-semibold py-2">About Me</h2>
            <h3 className="text-lg">MY STORY</h3>
            <p className="py-2">
              As developers, we are constructing new things every day. Each line
              of code is another building block. .We might be adding new
              features or solving bugs every day.
            </p>
            <h3 className="text-lg">GRADUATION</h3>
            <p className="py-2">
              I am a undergraduate student with 7.0 CGPA in department of
              Mechanical Engineering. And Enter the practical world in after
              May-2020 with full of hope and some technical skill
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
