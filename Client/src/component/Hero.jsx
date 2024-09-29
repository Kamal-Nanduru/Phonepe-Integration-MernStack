const Hero = () => {
  return (
    <div
      className="flex items-center justify-start bg-cover bg-center h-[500px] px-20"
      style={{
        backgroundImage:
          "url('https://www.phonepe.com/webstatic/8020/static/bab93065eae063d167f5ea2699093877/c1caf/hp-banner-pg.webp')",
      }}
    >
      {/* Left Side: Text Section */}
      <div className="bg-white bg-opacity-70 p-8 rounded-md max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to WebCodder</h1>
        <p className="text-lg text-gray-700">
          Experience seamless and secure digital payments with our trusted
          solutions. Join millions of users today!
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/918949666472"
            className=" px-6 py-3 bg-[#6739B7] text-white font-semibold rounded"
          >
            Need our Help ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
