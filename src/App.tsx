import bgimage from "./bgImage/herobg.jpg";

function App() {
  return (
    <div>
      <div
        className=" h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="h-full flex justify-between md:mx-24">
          <div className="  flex flex-col justify-center space-y-2   ">
            <p className=" text-lg text-slate-300 font-heebo font-semibold">
              Hi, I'm
            </p>
            <p className="text-5xl font-bold font-heebo text-white">
              Dipak Gautam
            </p>
            <p className=" text-base text-slate-300 font-heebo font-semibold">
              A passionate Front-End React Developer
            </p>
          </div>
          <div className="h-full">
            <p className=" h-full rounded-full overflow-auto -translate-y-20 ">
              <img
                src="public/assets/images/nobgprofile.png"
                alt=""
                className="h-[95%] translate-y-4 "
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
