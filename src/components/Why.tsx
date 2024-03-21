const Why = () => {
  return (
    <section className="max-w-[80rem] mx-auto">
      <section className="flex flex-col gap-6 items-center justify-center py-10 px-2">
        <h2 className="text-5xl text-center font-bold">
          Why Our Fixed Deposit Investment?
        </h2>
        <p className="text-center max-w-[40rem] text-lg">
          Let your money work for you. Fix your money for specific periods and
          get high interest rates with our secure fixed deposits.
        </p>

        <section className="flex items-center justify-between mt-20 xl:gap-40 gap-10">
          <div className="flex flex-col items-center gap-10">
            <img src="./chart.png" alt="" />
            <span>18% Hight Interest Rate</span>
          </div>
          <div className="flex flex-col items-center gap-10">
            <img src="./bank.png" alt="" />
            <span>Regulated by CBN</span>
          </div>
          <div className="flex flex-col items-center gap-10">
            <img src="./check.png" alt="" />
            <span>Insured by the NDIC</span>
          </div>
          <div className="flex flex-col items-center gap-10">
            <img src="./arrow.png" alt="" />
            <span>Instant Withdrawal</span>
          </div>
        </section>

        <button className="mt-10 w-60 h-14 bg-blue-600 hover:bg-blue-800 rounded-md text-white">
          Enjoy 18% investment returns
        </button>

        <section className="py-10 xl:px-[15rem] md:px-[10rem] mt-10 items-center text-center border-y-2 border-black/30">
          CredPal financial services are offered by Bishopgate microfinance bank
          fully license and regulated by Central bank of Nigeria .This APY is
          effective as of 07/14/2022 and may change at any time before or after
          your investement placement. Please ensure you’ve updated rates.
          account opening. Affirm savings accounts are held with Bishopgate
          Micofinance bank, Member NDIC.
        </section>
      </section>
    </section>
  );
};

export default Why;
