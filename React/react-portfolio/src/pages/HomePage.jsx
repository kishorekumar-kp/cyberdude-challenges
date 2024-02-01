const HomePage = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="text-container">
          <h1>
            I am Kishorekumar
            <br /> A MERN Stack Developer
          </h1>
          <p className="">
            As developers, we are constructing new things every day. Each line
            of code is another building block. .We might be adding new features
            or solving bugs every day.
          </p>
          <button className="btn1 btn">Hire Me! ❤️</button>
          <button className="btn2 btn">View my portfolio ➡️</button>
        </div>
        <div className="img-container">
          <img
            alt=""
            width={350}
            height={350}
            style={{ filter: "drop-shadow(5px 5px 10px #000)" }}
          />
        </div>
      </div>
      <div className="container-2">
        <div className="img1-container">
          <img  alt="" width={400} height={250} className="img1" />
        </div>
        <div className="text-container2">
          <div className="text-component">
            <h2>About Me</h2>
            <h3>MY STORY</h3>
            <p className="pop">
              {" "}
              As developers, we are constructing new things every day. Each line
              of code is another building block. .We might be adding new
              features or solving bugs every day.
            </p>
            <h3>GRADUATION</h3>
            <p className="pop">
              I am a undergraduate student with 7.0 CGPA in department of
              Mechanical Engineering. And Enter the practical world in after
              May-2020 with full of hope and some technical skill{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
