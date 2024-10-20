const BoosterCard = () => {
  return (
    <div className="relative py-5 px-6 text-app border border-blue-500 shadow-md shadow-[rgba(28,100,242,0.1),rgba(28,100,242,0.2)] bg-gradient-to-b from-[#1E429F] to-[#0B1839] rounded-xl flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-white">Booster</p>
        <div className="bg-blue-50 text-blue-500 border border-blue-500 text-[10px] px-1.5 py-0.5 rounded-2xl">
          Popular
        </div>
      </div>

      <div className="inline-block overflow-y-hidden text-4xl font-bold mt-2 text-left text-white">
        <div className="inline-flex transition-[transform,opacity] duration-500 ease-out translate-y-0 opacity-100 text-left">
          <span className="text-left text-white">$</span>
          <span className="inline-grid overflow-y-hidden font-display text-heading-sm text-primary">
            <span className="col-start-1 row-start-1 translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-out text-white">
              499
            </span>

            <span className="left-0 top-0 col-start-1 row-start-1 transition-[transform,opacity] duration-500 ease-out -translate-y-full opacity-0 text-white">
              207
            </span>
          </span>
          <span className="text-sm mt-4  ml-1 text-white">/month</span>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="bg-green-100 text-green-800  border  text-xs px-2 py-1 rounded-2xl ">
          50% off
        </div>
        <div className="text-white font-[800] text-[21.38px] leading-[21.38px] font-inter text-left line-through ml-1 ">
          $999
        </div>
      </div>

      <ul className="flex flex-col gap-y-2 mt-6 border-b pb-10 flex-1">
        {[
          "25,000 Credits",
          "Webhook, HTTP API",
          "Credit rollover (upto 2x plan credits)",
          "Outbound email integrations like Instantly, Smartlead.",
          "Dedicated 3 hours from Bitscale expert",
          "Advanced models like Claude Sonnet",
          "Dedicated 8 hours from Bitscale expert",
          "2 way Hubspot integration",
        ].map((text, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Icon Container */}
            <div className="h-5 w-5 shrink-0 rounded-md p-0.5 self-start mt-2">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 bg-white text-blue-700 rounded-full mt-0"
              >
                <path
                  d="m3.5 6.682.788 1.245c.542.857.813 1.285 1.16 1.435.304.13.648.133.953.007.35-.144.628-.568 1.183-1.416L10.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            {/* Text Content */}
            <p className="font-inter text-custom-sm font-[400] leading-custom-relaxed text-white text-left">
              {text}
            </p>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-y-2 mt-5 lg:min-h-36">
        <li className="flex items-start gap-2">
          <div className="h-[6px] w-[6px] shrink-0 rounded-full bg-white flex items-center justify-center mt-2"></div>
          <p className="text-sm xl:text-base text-white">
            Unlimited leads search
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="h-[6px] w-[6px] shrink-0 rounded-full bg-white flex items-center justify-center mt-2"></div>
          <p className="text-sm xl:text-base text-white text-left">
            Fully Enriched 15000 leads
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="h-[6px] w-[6px] shrink-0 rounded-full bg-white flex items-center justify-center mt-2"></div>
          <p className="text-sm xl:text-base text-white text-left">
            Personalised outreach at scale
          </p>
        </li>
      </ul>
      <div className="mt-5 w-full">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white h-10 px-4 py-2 w-full rounded-xl hover:bg-app hover:text-white ease-linear transition-all duration-200 text-white">
          <a
            href="https://calendar.app.google/kKnvaQkravqXd6gPA"
            className="text-black font-inter text-custom-xs font-[500] leading-custom-tight text-left p-8"
          >
            Continue with Booster
          </a>
        </button>
      </div>
    </div>
  );
};

export default BoosterCard;
