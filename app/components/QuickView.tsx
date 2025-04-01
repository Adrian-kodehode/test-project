import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Products } from "~//components/Products";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Example() {
  const [opem, setOpem] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(Product.sizes);

  return (
    <Dialog open={open} onClose={setOpem} className="relative z-10">
      <DialogPanel
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed_opacity-0 data-enter:duration.300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:max-w-2xl md:px-4 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpem(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <img src={product.imageSrc} alt={Product.imageAlt} />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
