import { herobg } from "../../../assets";



const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image (Full Screen) */}
      <img
        src={herobg}
        alt="Toothpaste Bits Background"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />

      {/* Hero Content Positioned on the Left Side */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 text-white z-10">
        <div className="w-full md:w-1/2">
          
          {/* Shop Now Button */}
          <a
            href="#shop"
            className="inline-block px-8 py-3 bg-black text-white text-lg font-semibold rounded hover:bg-[#72F2C7] transition duration-300 ease-in-out"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
