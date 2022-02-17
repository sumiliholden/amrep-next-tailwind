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
import { Header } from "../components/sections/HeaderSectionComponent";
export default function Home() {
  const title = "Professional Real Estate Photo Photo Processors";
  const description =
    "New clients enjoy 1 Week of Free Processing as a trial before you commit!";
  return (
    <div>
      <Layout>
        <CtaSectioncomponent />
        <LogoCloudComponent />
        <FeatureSectionComponent />
        <GradientFeatureSectionComponent />
        <StatsComponent />
      </Layout>
    </div>
  );
}
