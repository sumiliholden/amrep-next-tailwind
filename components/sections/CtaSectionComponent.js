import Image from "next/image";
export const CtaSectioncomponent = () => {
  return (
    <div className="bg-white">
      <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-base-content sm:text-5xl">
                <span className="block">Real Estate Photo Post Processing </span>
                <span className="block">Based in Virginia Beach, VA</span>
              </h2>
              <p className="mt-4 text-2xl sm:text-2xl leading-6 text-base-content">
              New clients enjoy 1 Week of Free Processing as a trial before you commit!
              </p>
              <a
                href="#"
                className="mt-8 bg-indigo-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center font-medium text-white hover:bg-indigo-700"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 relative">
            <Image
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
