
//components
import Layout from "../layouts/Layout";
import { PricingPlanComponent } from "../components/sections/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/sections/LogoCloudComponent";
import { FaqComponent } from "../components/sections/FaqComponent";
import { PhotoGridComponent } from "../components/sections/PhotoGridComponent";

//data tier for photo-editing
import { photoEditing } from "../data/tier";
const tier = photoEditing
export default function PhotoEditing() {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-800">
          {/* Pricing with four tiers and toggle */}
          <PricingPlanComponent {...tier} />
          {/* Logo cloud on brand */}
          <PhotoGridComponent />
        </div>
      </Layout>
    </>
  );
}
