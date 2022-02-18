import Image from "next/image";
const logos = [
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-purple-200.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-purple-200.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-purple-200.svg",
  },
  {
    name: "Transistor",
    url: "https://tailwindui.com/img/logos/transistor-logo-purple-200.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-purple-200.svg",
  },
];
export const LogoCloudComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Trusted by over 5 very average small businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
              height="150"
              width="150"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
           <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              
              alt="Mirage"
              height="150"
              width="150"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
           <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
              height="150"
              width="150"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
           <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
              height="150"
              width="150"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
           <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
              height="150"
              width="150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LogoCloudComponentOnBrand = () => {
  return (
    <div className="bg-purple-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="lg:space-y-10">
          <h2 className="text-3xl font-extrabold text-white">
            The world&apos;s most innovative companies use Workflow
          </h2>
          <div className="mt-8 flow-root lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
                >
                  <img className="h-12" src={logo.url} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
