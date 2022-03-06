import ImageComparison from "../ImageComparison";
import { Header } from "./HeaderSectionComponent";
const files = [
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406785862-KSMK1OVGQKG1T8EKISBZ/Done-1+%284%29.jpg" },
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406785685-LKAWS433UELM3SY2H0VN/Done-1+%283%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406786828-BQ3G5GXTLET6XCT74PET/Done-1+%2814%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406786883-RGEEID4NGWGQK7Z3O415/Done-1+%2813%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406787689-WHQE09F0NF5QWLPEQ4PF/Done-1+%2812%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406787753-QACRFCAUTDIQGZRVR47U/Done-1+%2811%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406788495-B7322N058D3UCL5CHIVH/Done-1+%2810%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406788610-FZXO8U16T1BT2G3LIL0V/Done-1+%289%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406789413-TYFLDH1VNL50P2WTOCGD/Done-1+%288%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406789470-O3Y18AKI74TJ2W820NNX/Done-1+%287%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406790183-G63FU0GR36AJA0T8BE0Q/Done-1+%286%29.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/1640406790124-YVD71SBFTDBBEH1A2VT9/Done-1+%285%29.jpg"},
];

export const VirtualTwilightGridComponent = () => {
  const title = "Sample Works";
  const description = "Lorem ipsum dolor sit amet";
  return (
    <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
      <Header title={title} description={description} />
      <ImageComparison
        beforeImage="https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/61c699347d5f9448ada0f031/1640405301356/before+twilight.jpg"
        afterImage="https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/61c6993904177b70b0321f96/1640405306316/virtual+twilight+photo.jpg"
      />
      <ul
        role="list"
        className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mx-auto max-w-7xl px-6"
      >
        {files.map((file, key) => (
          <li key={key} className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img
                src={file.source}
                alt=""
                className="object-cover pointer-events-none group-hover:opacity-75"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
