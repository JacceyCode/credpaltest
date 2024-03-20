const Hero = () => {
  return (
    <section className="flex justify-between py-10">
      <article className="mt-12">
        <h1 className="text-7xl font-extrabold">
          <span className="text-blue-600">Enjoy</span> High Yield <br /> Fixed
          Deposit <br /> Invesment
        </h1>

        <button className="mt-10 py-4 px-10 bg-blue-600 rounded-md text-white">
          Enjoy 18% investment returns
        </button>
      </article>
      <section>
        <img src="./mother.png" alt="Mother and Child Image" />
      </section>
    </section>
  );
};

export default Hero;
