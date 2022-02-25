/* This example requires Tailwind CSS v2.0+ */

export const Header = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-base-content sm:text-5xl sm:tracking-tight lg:text-6xl">
            {props.title}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-base-content">
            {props.description}
          </p>
        </div>
      </div>
    </div>
    
  );
};
