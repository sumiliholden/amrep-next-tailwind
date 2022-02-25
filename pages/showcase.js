import Layout from "../layouts/Layout";
import ImageComparison from "../components/ImageComparison";

export default function Showcase() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-gray-800">
        <ImageComparison />
      </div>
    </Layout>
  );
}
