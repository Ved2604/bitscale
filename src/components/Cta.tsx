const Cta = () => {
  return (
    <div className="flex flex-col items-center mt-11">
      <div className="rounded-xl bg-blue-100 p-0.5">
        <div className="relative grid grid-cols-[1fr,1fr] gap-x-0.5">
          <div className="absolute left-0 top-0 h-full w-[calc((100%-2px)/2)] rounded-[10px] bg-white transition-transform duration-300 ease-in-out shadow-md  "></div>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 isolate rounded-[10px] text-sm transition-colors duration-500 px-5 py-2 text-black-700 hover:bg-transparent">
            Monthly
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 isolate rounded-[10px] text-sm transition-colors duration-500 px-5 py-2 text-black-400 hover:bg-transparent">
            Annual
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
