import LearnMore from "./LearnMore";
const Hero = () => {
  return (
    <>
      <div className="h-screen flex flex-row gap-20">
        <div className=" ml-20 mt-20">
          <img src="https://placehold.co/800x600" alt="yo" />
        </div>
        <div id="side-text" className="mt-20 w-3/5 mr-20 font-modern">
          <p className=" text-4xl">
            {" "}
            No one understands greatness until they can see it with their eyes,
            and these colors are so great you don't even need to see them.
          </p>
          <br />
          <br />
          <p className="text-4xl">
            With these colors, you can go to places you've never been able to
            with free-to-use and unlicensed colors.
          </p>
          <br />
          <br />
          <p className="text-4xl">Drop a couple bands, live lavishly.</p>
        </div>
      </div>
      <div className="   bg-gray-900 h-72 grid justify-center content-center  ">
        <p className=" text-4xl text-white text-center italic ">
          See a color you trademarked?
        </p>
        <p className="text-4xl text-white text-center italic">
          Take it up with us, street style.
        </p>
        <p className="text-2xl text-white font-thin">
          just kidding! these colors were generated randomly
        </p>
      </div>
      <LearnMore />
    </>
  );
};

export default Hero;
