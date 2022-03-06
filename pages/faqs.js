//components
import Layout from "../layouts/Layout";
import { Header } from "../components/sections/HeaderSectionComponent";
import { FaqComponent } from "../components/sections/FaqComponent";
import { StatsComponent } from "../components/sections/StatsComponent";
const title = "Frequently asked questions";
const description = "Lorem ipsum dolor sit amet";
export default function Faqs() {
  return (
    <Layout>
      <Header title={title} description={description}/>
      <FaqComponent />
    </Layout>
  );
}
