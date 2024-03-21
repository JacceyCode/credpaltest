const Hero = () => {
  return (
    <section className="max-w-[80rem] mx-auto">
      <section className="flex flex-col gap-10 lg:flex-row justify-between items-center py-10 px-2">
        <article className="mt-12">
          <h1 className="xl:text-7xl text-5xl leading-snug font-extrabold">
            <span className="text-blue-600">Enjoy</span> High Yield <br /> Fixed
            Deposit <br /> Invesment
          </h1>

          <button className="mt-10 w-60 h-14 bg-blue-600 hover:bg-blue-800 rounded-md text-white">
            Enjoy 18% investment returns
          </button>
        </article>
        <section>
          <img src="./mother.png" alt="Mother and Child Image" />
        </section>
      </section>
    </section>
  );
};

export default Hero;
