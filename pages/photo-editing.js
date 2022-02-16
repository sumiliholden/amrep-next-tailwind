
//components
import Layout from "../layouts/Layout";
import { PricingPlanComponent } from "../components/sections/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/sections/LogoCloudComponent";
import { FaqComponent } from "../components/sections/FaqComponent";

export default function Example() {
  return (
    <>
      <Layout>
        <div className="bg-white">
          {/* Pricing with four tiers and toggle */}
          <PricingPlanComponent />
          {/* Logo cloud on brand */}
          <LogoCloudComponentOnBrand />
          {/* FAQ offset */}
          <FaqComponent />
        </div>
      </Layout>
    </>
  );
}
