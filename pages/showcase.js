import Layout from "../layouts/Layout";
import ImageComparison from "../components/ImageComparison";
import { Header } from "../components/sections/HeaderSectionComponent";

const files = [
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/8e348e73-44c6-4735-a546-0a0e2b9c3741/Done-1.jpg" },
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/64597f14-4d6c-44d4-8e2f-73621e6557f9/Done-6.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/cf0ae2cf-48d2-48d1-8473-39b9c677736e/Done-7.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/3ab21192-7d1c-42ea-8177-12fc50718c39/Done-12.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/99e77555-8b2f-48c5-8646-5569a0160dba/Done-3.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/4eea2833-dd76-4180-91c6-601e1ae39ac3/Done-3.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/c6c10f74-127a-48b6-9e97-64ef1ce4e273/Done-7.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/672c50a1-abf7-4155-ac02-29b5553f5edf/DSC03858-HDR-Edit-8.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/74161d94-b583-4d06-b7c6-0c4c798a496c/Done-11.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/39910026-e925-4a5b-8e89-46012d7d8e26/Done-6.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/eea0cbd9-4ddc-4c8f-b7c4-941a5d3f63ec/Done-1.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/aa961418-904e-49e2-979d-8c5ad3e24152/Done-18.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/c343fb04-fabf-44ab-8914-5cc387ab4a14/Done-21.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/e88ec0c3-d6c8-44bd-af24-be818452e80a/DSC04906-HDR-Edit-2.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/ca15c135-2ef8-42c9-bc15-ff6d808c5263/Done-6.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/c1784e04-35ae-4110-a6bb-087385bdbffb/Done-16.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/4d17e241-bb32-4d76-a541-0ed1a358d297/Done-24.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/dd430548-8e18-4dc7-b058-f1840cfa6606/DSC04061-HDR-Edit.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/0a63f90f-6f2c-456b-8cae-6aeb7f28479f/DSC02983-HDR-Edit.jpg"},
  {source: "https://images.squarespace-cdn.com/content/v1/60be3f15c04ff53428559e91/3f833ad7-2ad3-4722-8d0a-1a6849a25d8d/Done-12.jpg"},
];
export default function Showcase() {
  const title = "Sample Works";
  const description = "Lorem ipsum dolor sit amet";
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800">
        <Header title={title} description={description} />
        <ul
          role="list"
          className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mx-auto max-w-none px-6"
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
    </Layout>
  );
}
