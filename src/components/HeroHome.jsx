import LearnMore from "./LearnMore";
import shopImg from '../assets/shop-img.jpg'
const Hero = () => {
  return (
    <>
      <div className=" h-fit pb-48 flex flex-row gap-20">
        <div className=" ml-20 mt-20">
          <img src={shopImg} alt="Flat Lay of products" />
        </div>
        <div id="side-text" className="mt-20 w-3/5 mr-20 font-modern">
          <p className=" text-4xl">
            {" "}
            Get <span className=" font-bold text-sky-900">25%</span> off your first order when you sign up <span className=" font-bold text-sky-900">TODAY</span>
          </p>
          <br />
          <br />
          <p className="text-4xl">
            Hex is a brand that cares about you. Our products are ethically sourced, and like bitcoin, can be tracked through each and every vendor. To learn more, click below.
          </p>
          <br />
          <br />
          <p className="text-4xl">Drop a couple bands, live lavishly.</p>
        </div>
      </div>
      <div className="   bg-gray-900 h-72 grid justify-center content-center  ">
        <p className=" text-4xl text-white text-center italic ">
          Live comfortable.
        </p>
        <p className="text-4xl text-white text-center italic">
        climb trees.
        </p>
      </div>
      <LearnMore />
    </>
  );
};

export default Hero;
