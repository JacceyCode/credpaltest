import {
  FaGooglePlay,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="flex relative items-start justify-between gap-10 bg-black p-10 px-20">
      {/* 1st */}
      <section className="flex flex-col w-[20rem] gap-5">
        <h4>
          <img src="./logo-white.png" alt="logo" />
        </h4>
        <p className="text-sm text-white/60">
          CredPal is a revolutionary credit solution geared towards providing
          seamless credit access for businesses and individuals across
          developing economies.
        </p>

        <div className="flex items-center gap-5">
          <div className="mt-10 py-2 px-4 w-40 bg-gradient-to-r from-rose-300 via-amber-400 to-lime-500 rounded-sm text-black flex items-center gap-4">
            <FaGooglePlay size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-sm font-medium">Google Play</span>
            </div>
          </div>
          <div className="mt-10 px-4 py-2 w-40 bg-gradient-to-r from-rose-300 via-amber-400 to-lime-500 rounded-sm text-black flex items-center gap-4">
            <FaApple size={24} />

            <div className="flex flex-col">
              <span className="text-xs">Downlaod on</span>
              <span className="text-base font-medium">App Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className="flex flex-col gap-5">
        <h4 className="text-white text-lg">Products</h4>
        <p className="text-sm text-white/60">Personal Credit Cards</p>
        <p className="text-sm text-white/60">Business Credit Cards</p>
        <p className="text-sm text-white/60">Expense Management</p>
      </section>

      {/* 3rd */}
      <section className="flex flex-col gap-5">
        <h4 className="text-white text-lg">Legal</h4>
        <p className="text-sm text-white/60">Merchants terms of service</p>
        <p className="text-sm text-white/60">Customer's terms of use</p>
        <p className="text-sm text-white/60">Privacy policy</p>
      </section>

      {/* 4th */}
      <section className="flex flex-col gap-5">
        <h4 className="text-white text-lg">Support</h4>
        <p className="text-sm text-white/60">FAQs</p>
        <p className="text-sm text-white/60">Blog</p>
      </section>

      {/* 5th */}
      <section className="flex flex-col gap-5">
        <h4 className="text-white text-lg">Connect with us</h4>
        <div className="flex items-center gap-3 text-white/60">
          <FaFacebook />
          <FaTwitter />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>

        <h4 className="text-white mt-8 text-lg">Contact</h4>
        <p className="text-sm text-white/60">hello@credpal.com</p>
      </section>
    </section>
  );
};

export default Footer;
