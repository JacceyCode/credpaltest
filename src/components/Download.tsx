import { FaGooglePlay, FaApple } from "react-icons/fa6";

const Download = () => {
  return (
    <section className="bg-[#F2F4FC] p-20">
      <section className="max-w-[80rem] mx-auto">
        <section className="flex flex-col xl:flex-row gap-16 justify-between items-center">
          <article className="mt-12 max-w-[30rem]">
            <h1 className="md:text-5xl text-4xl leading-snug font-extrabold">
              Download the <br /> CredPal app to <br /> get started
            </h1>

            <p className="mt-10 text-lg">
              Join millions of satisfied customers who are already use CredPal
              to access credit, make payments , invest & many more!
            </p>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="mt-10 py-4 w-60 px-10 bg-black rounded-sm text-white flex items-center gap-4">
                <FaGooglePlay size={24} />

                <div className="flex flex-col">
                  <span className="text-xs">Downlaod on</span>
                  <span className="text-lg">Google Play</span>
                </div>
              </div>

              <div className="mt-10 py-4 w-60 px-10 bg-black rounded-sm text-white flex items-center gap-4">
                <FaApple size={24} />

                <div className="flex flex-col">
                  <span className="text-xs">Downlaod on</span>
                  <span className="text-lg">App Store</span>
                </div>
              </div>
            </div>
          </article>

          <section className="flex md:flex-row flex-col items-center gap-3">
            <img
              className="w-[18rem] h-[40rem]"
              src="./mobile.png"
              alt="Phone"
            />
            <img className="w-[12rem] h-[20rem]" src="./card.png" alt="Card" />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Download;
