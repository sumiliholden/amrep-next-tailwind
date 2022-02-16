//components
import Layout from "../components/Layouts/Layout";
import { CtaSectioncomponent } from "../components/CtaSectionComponent";
import {
  FeatureSectionComponent,
  GradientFeatureSectionComponent,
} from "../components/FeatureSectionComponent";
import { HeroComponent } from "../components/HeroComponent";
import { LogoCloudComponent } from "../components/LogoCloudComponent";
import { StatsComponent } from "../components/StatsComponent";
export default function Home() {
  return (
    <div>
      <Layout>
        <HeroComponent />
        <LogoCloudComponent />
        <FeatureSectionComponent />
        <GradientFeatureSectionComponent />
        <StatsComponent />
        <CtaSectioncomponent />
      </Layout>
    </div>
  );
}
