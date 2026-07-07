import Banner from "../../../components/Banner";
import CheckoutForm from "../../../components/CheckoutForm";
import { connectDb } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function CheckoutPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  let service = null;
  try {
    const servicesCollection = await connectDb("services");
    const serviceData = await servicesCollection.findOne({ _id: new ObjectId(id) });
    if (serviceData) {
      // Serialize ObjectId for Client Component
      service = {
        ...serviceData,
        _id: serviceData._id.toString(),
      };
    }
  } catch (error) {
    console.error("Error fetching service for checkout:", error);
  }

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto my-12 text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-red-600">Service Not Found</h2>
        <p className="text-gray-500 mt-2">The requested service details could not be loaded.</p>
        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 bg-orange-600 text-white font-bold py-2 px-6 rounded-xl hover:bg-orange-700 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CheckoutForm service={service} />
      </div>
    </div>
  );
}
