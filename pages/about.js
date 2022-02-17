//components
import Layout from "../Layouts/Layout";
import { Header } from "../components/sections/HeaderSectionComponent";
import { FaqComponent } from "../components/sections/FaqComponent";
import { StatsComponent } from "../components/sections/StatsComponent";
const title = "About Us";
const description = "Lorem ipsum dolor sit amet";
export default function About() {
  return (
    <Layout>
      <Header title={title} description={description}/>
      <FaqComponent />
      <StatsComponent />
    </Layout>
  );
}
