export const MainView = () => {
  return (
    <div className="bg-neutral-100 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col">
        <div className="md:pt-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
            ABM Personas
          </h1>
        </div>
        <div className="max-h-fit w-full rounded-lg bg-gray-100 shadow-lg md:h-auto grid grid-cols-2 grid-rows-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full max-h-98 md:w-full  md:max-h-full w-full object-cover object-center rounded-lg col-span-2 row-span-1 md:row-span-2 md:col-span-1"
          />
          <img
            src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            loading="lazy"
            alt="Photo by hitesh choudhary"
            className="h-full w-full object-cover object-center rounded-lg  col-span-2 row-span-1 md:col-span-1 hidden
            md:block"
          />
          <img
            src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            loading="lazy"
            alt="Photo by Tim Gouw"
            className="h-full w-full object-cover object-center rounded-lg  col-span-2 row-span-1 md:col-span-1 hidden
            md:block"
          />
        </div>
      </div>
    </div>
  );
};
