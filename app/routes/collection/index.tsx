import { Callouts } from "../..//components/Callouts";

export default function Collection() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-white"><a href="/image">Collections</a></h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {Callouts.map((Callout) => (
              <div key={Callout.name} className="group relative">
                <img
                  src={Callout.imageSrc}
                  alt={Callout.imageAlt}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-white">
                  <a href={Callout.href}>
                    <span className="absolute inset-0" />
                    {Callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white">
                  {Callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
