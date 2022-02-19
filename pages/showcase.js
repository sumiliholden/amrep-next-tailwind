import Layout from "../layouts/Layout";
import ImageComparison from "../components/ImageComparison";

export default function Showcase() {
  return (
    <Layout>
      <div className="bg-gray-50">
        <ImageComparison />
      </div>
    </Layout>
  );
}
