import { FaGooglePlay, FaApple } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="flex items-center justify-between gap-10 bg-black p-10">
      {/* 1st */}
      <section className="flex flex-col w-[20rem] gap-5">
        <h4>
          <img src="../../public/logo-white.png" alt="logo" />
        </h4>
        <p className="text-sm text-white/60">
          CredPal is a revolutionary credit solution geared towards providing
          seamless credit access for businesses and individuals across
          developing economies.
        </p>

        <div className="flex items-center gap-5">
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaGooglePlay size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-sm">Google Play</span>
            </div>
          </div>
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaApple size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-base">App Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className="flex flex-col w-[20rem] gap-5">
        <h4>
          <img src="../../public/logo-white.png" alt="logo" />
        </h4>
        <p className="text-sm text-white/60">
          CredPal is a revolutionary credit solution geared towards providing
          seamless credit access for businesses and individuals across
          developing economies.
        </p>

        <div className="flex items-center gap-5">
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaGooglePlay size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-sm">Google Play</span>
            </div>
          </div>
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaApple size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-base">App Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd */}
      <section className="flex flex-col w-[20rem] gap-5">
        <h4>
          <img src="../../public/logo-white.png" alt="logo" />
        </h4>
        <p className="text-sm text-white/60">
          CredPal is a revolutionary credit solution geared towards providing
          seamless credit access for businesses and individuals across
          developing economies.
        </p>

        <div className="flex items-center gap-5">
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaGooglePlay size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-sm">Google Play</span>
            </div>
          </div>
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaApple size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-base">App Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4th */}
      <section className="flex flex-col w-[20rem] gap-5">
        <h4>
          <img src="../../public/logo-white.png" alt="logo" />
        </h4>
        <p className="text-sm text-white/60">
          CredPal is a revolutionary credit solution geared towards providing
          seamless credit access for businesses and individuals across
          developing economies.
        </p>

        <div className="flex items-center gap-5">
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaGooglePlay size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-sm">Google Play</span>
            </div>
          </div>
          <div className="mt-10 p-4 w-40 bg-black rounded-sm text-white flex items-center gap-4">
            <FaApple size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-base">App Store</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
