import { Products } from "~/components/Products";
import SlideOver from "~/components/Slide-over";

export default function Product() {
  return (
    <div className="bg-[url('https://images2.alphacoders.com/114/1145884.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="flex justify-center items-center pt-4 pb-4">
        <img
          src="Chainsaw-Man-Logo.png"
          alt="Chainsaw Man Logo"
          className="h-52 w-auto"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 border border-black bg-black bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4 text-shadow-lg">
          Manga
        </h1>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Products.map((product) => {
            const [name, volume] = product.name.split("Vol.");
            return (
              <a key={product.id} href={product.href} className="group">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="aspect-auto w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 text-shadow-lg"
                />
                <div className="mt-4 text-white font-semibold flex justify-between">
                  <span>{name.trim()}</span>
                  <span className="text-white text-shadow-lg">
                    Vol.{volume}
                  </span>
                </div>
                <p className="mt-1 text-lg font-medium text-green-400 text-shadow-lg">
                  {product.price}
                </p>
              </a>
            );
          })}
        </div>
      </div>
      <SlideOver open={open} />
    </div>
  );
}
