import ImageComparison from "../ImageComparison";
import { Header } from "./HeaderSectionComponent";
const files = [
  {
    beforeImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f386f98284656405b54/1644711737168/Done-2.jpg",
    afterImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f307eb94a2d215ecf41/1644711729229/Done-1.jpg",
  },
  {
    beforeImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62085220770a4c3f1bcdfaa2/1644712481909/Done1-2.jpg",
    afterImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620850ddf2a0d23b226904b4/1644712160610/Done1-1.jpg",
  },
  {
    beforeImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856b7d709793a3a455834/1644713657561/Done2-1.jpg",
    afterImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856bd0184b53a627f6c61/1644713662888/Done2-2.jpg",
  },
  {
    beforeImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620860a826e4e10a4e69fdee/1644716200966/Done3-1.jpg",
    afterImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620860ac431a8367d7ee69d2/1644716204793/Done3-2.jpg",
  },
  {
    beforeImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f386f98284656405b54/1644711737168/Done-2.jpg",
    afterImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f307eb94a2d215ecf41/1644711729229/Done-1.jpg",
  },
  {
    beforeImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856b7d709793a3a455834/1644713657561/Done2-1.jpg",
    afterImage:
      "https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856bd0184b53a627f6c61/1644713662888/Done2-2.jpg",
  },
  // More files...
];

export const PhotoGridComponent = () => {
  const title = "Sample Works"
  const description = "Lorem ipsum dolor sit amet";
  return (
    <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
      <Header title={title} description={description}/>
      <ul
        role="list"
        className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0"
      >
        {files.map((file, key) => (
          <li key={key} className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <ImageComparison
                beforeImage={file.beforeImage}
                afterImage={file.afterImage}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
