// import { Products } from "./Products";

// export default function Product() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-4 xl:gap-x-8">
//         <h2 className="sr-only">Prodcts</h2>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {Products.map((product) => (
//             <a key={product.id} href={product.href} className="group">
//               <img
//                 src={product.imageSrc}
//                 alt={product.imageAlt}
//                 className="aspect-auto w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
//               />
//               <h3 className="mt-4 text-gray-700">{product.name}</h3>
//               <p className="mt-1 text-lg font-medium text-gray-900">
//                 {product.price}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
