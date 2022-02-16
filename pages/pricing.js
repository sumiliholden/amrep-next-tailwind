import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon as CheckIconOutline,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CheckIcon as CheckIconSolid,
  ChevronDownIcon,
} from "@heroicons/react/solid";
//components
import Layout from "../components/Layouts/Layout";
import { PricingPlanComponent } from "../components/PricingPlanComponent";
import { LogoCloudComponentOnBrand } from "../components/LogoCloudComponent";
import { FaqComponent } from "../components/FaqComponent";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
