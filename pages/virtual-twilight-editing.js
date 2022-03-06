
//components
import Layout from "../layouts/Layout";
import { PricingPlanComponent } from "../components/sections/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/sections/LogoCloudComponent";
import { FaqComponent } from "../components/sections/FaqComponent";
import { VirtualTwilightGridComponent } from "../components/sections/VirtualTwilightGridComponent";
//data tier for virtual-twilight-editing
import { virtualTwilight } from "../data/tier";
const tier = virtualTwilight
const title = "Virtual Twilight Editing"
export default function VideoEditing() {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-800">
          {/* Pricing with four tiers and toggle */}
          <PricingPlanComponent {...tier}/>
          {/* Logo cloud on brand */}
          <VirtualTwilightGridComponent />
        </div>
      </Layout>
    </>
  );
}
