
//components
import Layout from "../layouts/Layout";
import { PricingPlanComponent } from "../components/sections/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/sections/LogoCloudComponent";
import { FaqComponent } from "../components/sections/FaqComponent";
import { VideoGridComponent } from "../components/sections/VideoGridComponent";
//data tier for photo-editing
import { videoEditing } from "../data/tier";
const tier = videoEditing
export default function VideoEditing() {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-800">
          {/* Pricing with four tiers and toggle */}
          <PricingPlanComponent {...tier}/>
          {/* Logo cloud on brand */}
          <VideoGridComponent />
        </div>
      </Layout>
    </>
  );
}
