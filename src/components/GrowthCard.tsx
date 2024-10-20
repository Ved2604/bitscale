const GrowthCard = () => {
  return (
    <div className="relative py-5 px-6 text-app border bg-white border-zinc-200 rounded-xl flex flex-col">
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold text-left">Growth</p>
      </div>

      <div className="inline-block overflow-y-hidden text-4xl font-bold mt-2 text-left">
        <div className="inline-flex transition-[transform,opacity] duration-500 ease-out translate-y-0 opacity-100 text-left">
          <span className="text-left">$</span>
          <span className="inline-grid overflow-y-hidden font-display text-heading-sm text-primary">
            <span className="col-start-1 row-start-1 translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-out">
              229
            </span>

            <span className="left-0 top-0 col-start-1 row-start-1 transition-[transform,opacity] duration-500 ease-out -translate-y-full opacity-0 ">
              207
            </span>
          </span>
          <span className="text-sm mt-4  ml-1 text-gray-500">/month</span>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="bg-green-100 text-green-800  border  text-xs px-2 py-1 rounded-2xl ">
          50% off
        </div>
        <div className="text-gray-500 font-[800] text-[21.38px] leading-[21.38px] font-inter text-left line-through ml-1">
          $459
        </div>
      </div>

      <ul className="flex flex-col gap-y-2 mt-6 border-b pb-10 flex-1">
        <li className="flex items-start gap-3">
          {/* Icon Container */}
          <div className="h-5 w-5 shrink-0 rounded-md  p-0.5 self-start mt-1">
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 bg-blue-700 text-white rounded-full mt-0"
            >
              <path
                d="m3.5 6.682.788 1.245c.542.857.813 1.285 1.16 1.435.304.13.648.133.953.007.35-.144.628-.568 1.183-1.416L10.5 3.5"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              ></path>
            </svg>
          </div>

          {/* Text Content */}
          <p className="font-inter text-custom-sm font-[700] leading-custom-relaxed text-blue-700 text-left">
            8,000 Credits
          </p>
        </li>
        {[
          "WebHook, HTTP API",
          "Credit Rollover (upto 2x plan credits)",
          "Outbound email integrations like instantly, Smartlead",
          "Dedicated 3 hours from Bitscale Expert",
        ].map((text, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Icon Container */}
            <div className="h-5 w-5 shrink-0 rounded-md  p-0.5 self-start mt-2">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 bg-black text-white rounded-full mt-0"
              >
                <path
                  d="m3.5 6.682.788 1.245c.542.857.813 1.285 1.16 1.435.304.13.648.133.953.007.35-.144.628-.568 1.183-1.416L10.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                ></path>
              </svg>
            </div>

            {/* Text Content */}
            <p className="font-inter text-custom-sm font-[400] leading-custom-relaxed text-gray-500 text-left">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-y-2 mt-5 lg:min-h-36">
        <li className="flex items-start gap-2">
          <div className="h-[22px] w-[22px] shrink-0 rounded-md flex items-center justify-center p-0.5 text-zinc-600">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_380_2293)">
                <rect
                  width="7"
                  height="7"
                  rx="3.5"
                  fill="#3A65FF"
                  fill-opacity="0.14"
                ></rect>
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="6"
                height="6"
                rx="3"
                stroke="#3A65FF"
              ></rect>
              <defs>
                <clipPath id="clip0_380_2293">
                  <rect width="7" height="7" rx="3.5" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-zinc-600 text-sm xl:text-base">
            Unlimited leads search
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="h-[22px] w-[22px] shrink-0 rounded-md flex items-center justify-center p-0.5 text-zinc-600">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_380_2293)">
                <rect
                  width="7"
                  height="7"
                  rx="3.5"
                  fill="#3A65FF"
                  fill-opacity="0.14"
                ></rect>
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="6"
                height="6"
                rx="3"
                stroke="#3A65FF"
              ></rect>
              <defs>
                <clipPath id="clip0_380_2293">
                  <rect width="7" height="7" rx="3.5" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-zinc-600 text-sm xl:text-base">
            Fully enriched 5000 leads
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="h-[22px] w-[22px] shrink-0 rounded-md flex items-center justify-center p-0.5 text-zinc-600">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_380_2293)">
                <rect
                  width="7"
                  height="7"
                  rx="3.5"
                  fill="#3A65FF"
                  fill-opacity="0.14"
                ></rect>
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="6"
                height="6"
                rx="3"
                stroke="#3A65FF"
              ></rect>
              <defs>
                <clipPath id="clip0_380_2293">
                  <rect width="7" height="7" rx="3.5" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-zinc-600 text-sm xl:text-base">
            Personalized outreach at scale
          </p>
        </li>
      </ul>
      <div className="mt-5 w-full">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-blue-700 h-10 px-4 py-2 w-full rounded-xl hover:bg-app hover:text-white ease-linear transition-all duration-200 text-white">
          <a
            href="https://calendar.app.google/kKnvaQkravqXd6gPA"
            className="text-white font-inter text-custom-xs font-[500] leading-custom-tight text-left"
          >
            Continue with Growth
          </a>
        </button>
      </div>
    </div>
  );
};

export default GrowthCard;
