import StoreNavigation from "~/components/storeNavigation"; // Import StoreNavigation

export default function TestPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Include storeNavigation */}
      <StoreNavigation />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Test Page
        </h1>
        <p className="mt-4 text-gray-700">
          This is the test page where the store navigation is displayed.
        </p>
      </div>
    </div>
  );
}
