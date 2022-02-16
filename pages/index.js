//components
import Layout from "../layouts/Layout";
import { CtaSectioncomponent } from "../components/sections/CtaSectionComponent";
import {
  FeatureSectionComponent,
  GradientFeatureSectionComponent,
} from "../components/sections/FeatureSectionComponent";
import { HeroComponent } from "../components/sections/HeroComponent";
import { LogoCloudComponent } from "../components/sections/LogoCloudComponent";
import { StatsComponent } from "../components/sections/StatsComponent";
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
