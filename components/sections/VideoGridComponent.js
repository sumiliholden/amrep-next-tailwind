import ImageComparison from "../ImageComparison";
import { Header } from "./HeaderSectionComponent";
const files = [
  {
    title: "Standard “Walkthrough” Edit",
    videoTitle: "HM Family_Manor_Ashburne",
    source:
      "https://player.vimeo.com/video/641919142?h=d7ea6014f7&amp;title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;app_id=122963",
  },
  {
    title: "Advanced “Cinematic” Edit",
    videoTitle: "933 Bobolink Drive Virginia Beach VA.mp4",
    source:
      "https://player.vimeo.com/video/537325941?h=d1c4854e66&title=0&byline=0&portrait=0&playsinline=0&autopause=0&app_id=122963",
  },
  {
    title: "Highlight Reel Edit",
    videoTitle: "Bobolink",
    source:
      "https://player.vimeo.com/video/537317894?h=712e02bd53&title=0&byline=0&portrait=0&playsinline=0&autopause=0&app_id=122963",
  },
];
export const VideoGridComponent = () => {
  const title = "Sample Works";
  const description = "Lorem ipsum dolor sit amet";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header title={title} description={description} />
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
      >
        {files.map((file, key) => (
          <li key={key} className="relative">
            <p className="text-center mt-2 block text-lg font-medium text-base-content pointer-events-none">
              {file.title}
            </p>
            <div
              className="h-96"
              // style="height: 360px;"
            >
              <div
                data-vimeo-initialized="true"
                className="w-full h-full overflow-hidden"
                // style="width: 100%; height: 100%; overflow: hidden;"
              >
                <iframe
                  src={file.source}
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen=""
                  videotitle={file.videoTitle}
                  data-ready="true"
                  className="w-full h-full"
                  // style="width: 100%; height: 100%;"
                ></iframe>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
