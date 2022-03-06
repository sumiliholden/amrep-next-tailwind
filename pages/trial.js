import { Widget } from "@typeform/embed-react";
import { PopupButton } from "@typeform/embed-react";
//components
import Layout from "../layouts/Layout";
import { Header } from "../components/sections/HeaderSectionComponent";

const title = "1-Week Free Trial!";
const description =
  "We are so confident that you will be thrilled with our work, new customers enjoy a 1 Week Free Trial* to test out the service";
export default function Example() {
  return (
    <Layout>
      <Header title={title} description={description} />
      <div>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 text-center">
          {/* <Widget id="<form-id>" style={{ width: "50%" }} className="my-form" /> */}

          <PopupButton
            id="xp0fgJ5p"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700 "
          >
            Click here to avail our 1-Week free trial!
          </PopupButton>
        </div>
      </div>
    </Layout>
  );
}
