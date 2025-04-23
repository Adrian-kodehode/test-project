// import React, { useState, useEffect, ReactNode } from "react";
// import {
//   Menu,
//   Card,
//   Button,
//   CardBody,
//   MenuItem,
//   MenuList,
//   CardHeader,
//   Typography,
// } from "@material-tailwind/react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// // For client-side only rendering of ApexCharts
// interface ClientOnlyProps {
//   children: () => ReactNode;
//   fallback?: ReactNode;
// }

// function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return <>{fallback}</>;
//   }

//   return <>{children()}</>;
// }

// interface TransactionCardPropsType {
//   img: string;
//   name: string;
//   price: string;
// }

// interface ChartCardPropsType {
//   title: string;
//   price: string[];
//   market: string;
//   marketPrice: string;
//   volumePrice: string;
//   volume: string;
//   solana: boolean;
//   chart: any;
// }

// // Add required pointer event handlers to all Material Tailwind components
// const eventHandlers = {
//   onPointerEnterCapture: () => {},
//   onPointerLeaveCapture: () => {},
// };

// // chart card
// function ChartsCard({
//   chart,
//   title,
//   price,
//   market,
//   volume,
//   marketPrice,
//   volumePrice,
//   solana,
// }: ChartCardPropsType) {
//   return (
//     <Card
//       className="shadow-md border border-gray-200 w-full h-fit"
//       placeholder=""
//       {...eventHandlers}
//     >
//       <CardHeader
//         shadow={false}
//         floated={false}
//         className="flex items-start justify-between rounded-none overflow-visible"
//         placeholder=""
//         {...eventHandlers}
//       >
//         <div>
//           <Typography
//             variant="small"
//             className="text-gray-600 font-medium mb-1"
//             placeholder=""
//             {...eventHandlers}
//           >
//             {title}
//           </Typography>
//           <Typography
//             variant="h3"
//             color="blue-gray"
//             placeholder=""
//             {...eventHandlers}
//           >
//             {price[0]}{" "}
//             {solana ? (
//               <span className="text-gray-500">{price[1]}</span>
//             ) : (
//               <span className="text-gray-500 text-lg">{price[1]}</span>
//             )}
//           </Typography>
//         </div>
//         <Menu>
//           <MenuHandler>
//             <Button
//               size="sm"
//               color="gray"
//               variant="outlined"
//               className="flex items-center gap-1 !border-gray-300"
//               placeholder=""
//               {...eventHandlers}
//             >
//               last 24h
//               <ChevronDownIcon
//                 strokeWidth={4}
//                 className="w-3 h-3 text-gray-900"
//               />
//             </Button>
//           </MenuHandler>
//           <MenuList placeholder="" {...eventHandlers}>
//             <MenuItem placeholder="" {...eventHandlers}>
//               last 12h
//             </MenuItem>
//             <MenuItem placeholder="" {...eventHandlers}>
//               last 10h
//             </MenuItem>
//             <MenuItem placeholder="" {...eventHandlers}>
//               last 24h
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       </CardHeader>
//       <ClientOnly fallback={<div className="h-[220px]"></div>}>
//         {() => {
//           // Dynamically import ApexCharts on the client side only
//           const ReactApexChart = require("react-apexcharts").default;
//           return <ReactApexChart {...chart} />;
//         }}
//       </ClientOnly>
//       <CardBody
//         className="pt-4 flex flex-wrap gap-y-4 justify-between"
//         placeholder=""
//         {...eventHandlers}
//       >
//         <div>
//           <Typography
//             variant="small"
//             className="text-gray-600 font-medium mb-1"
//             placeholder=""
//             {...eventHandlers}
//           >
//             {market}
//           </Typography>
//           <Typography
//             variant="h3"
//             color="blue-gray"
//             placeholder=""
//             {...eventHandlers}
//           >
//             {marketPrice}
//           </Typography>
//         </div>
//         <div>
//           <Typography
//             variant="small"
//             className="text-gray-600 font-medium mb-1"
//             placeholder=""
//             {...eventHandlers}
//           >
//             {volume}
//           </Typography>
//           <Typography
//             variant="h3"
//             color="blue-gray"
//             placeholder=""
//             {...eventHandlers}
//           >
//             {volumePrice}
//           </Typography>
//         </div>
//       </CardBody>
//     </Card>
//   );
// }

// // transaction card
// function TransactionCard({ img, name, price }: TransactionCardPropsType) {
//   return (
//     <Card
//       className="shadow-md border border-gray-200"
//       placeholder=""
//       {...eventHandlers}
//     >
//       <CardBody className="p-4" placeholder="" {...eventHandlers}>
//         <div className="h-6 w-6 mb-5 bg-gray-200 rounded flex items-center justify-center">
//           {/* Using placeholders since we don't have the actual logo images */}
//           <span className="text-xs">{name.charAt(0)}</span>
//         </div>
//         <Typography
//           variant="small"
//           className="text-gray-600 font-medium mb-1"
//           placeholder=""
//           {...eventHandlers}
//         >
//           {name}
//         </Typography>
//         <Typography
//           variant="h3"
//           color="blue-gray"
//           placeholder=""
//           {...eventHandlers}
//         >
//           {price} <span className="text-gray-500 text-lg uppercase">sol</span>
//         </Typography>
//       </CardBody>
//     </Card>
//   );
// }

// // charts config
// const chartsConfig = {
//   chart: {
//     toolbar: {
//       show: false,
//     },
//   },
//   title: {
//     show: "",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   xaxis: {
//     axisTicks: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     labels: {
//       show: false,
//     },
//   },
//   yaxis: {
//     labels: {
//       show: false,
//     },
//   },
//   grid: {
//     show: true,
//     borderColor: "#EEEEEE",
//     strokeDashArray: 5,
//     xaxis: {
//       lines: {
//         show: false,
//       },
//     },
//     padding: {
//       top: 5,
//       right: 20,
//     },
//   },
//   fill: {
//     opacity: 0.8,
//   },
//   tooltip: {
//     theme: "light",
//   },
// };

// // Updated chart data with real-time prices and better visual appearance
// const priceChart = {
//   type: "area",
//   height: 220,
//   series: [
//     {
//       name: "Price",
//       data: [50000, 48000, 53000, 65000, 72000, 68000, 64500, 70000, 75500],
//     },
//   ],
//   options: {
//     ...chartsConfig,
//     colors: ["#388e3c"],
//     stroke: {
//       lineCap: "round",
//       width: 2,
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         opacityFrom: 0.5,
//         opacityTo: 0.1,
//       },
//     },
//     xaxis: {
//       ...chartsConfig.xaxis,
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//   },
// };

// const stakedChart = {
//   type: "area",
//   height: 220,
//   series: [
//     {
//       name: "Staked",
//       data: [15000, 16500, 19000, 23000, 29000, 33000, 36000, 40000, 42000],
//     },
//   ],
//   options: {
//     ...chartsConfig,
//     colors: ["#2196F3"],
//     stroke: {
//       lineCap: "round",
//       width: 2,
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         opacityFrom: 0.5,
//         opacityTo: 0.1,
//       },
//     },
//     xaxis: {
//       ...chartsConfig.xaxis,
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//   },
// };

// // charts data
// const ChartsCardData = [
//   {
//     title: "Bitcoin Price",
//     price: ["$68,091", "BTC"],
//     market: "Market Cap",
//     volume: "24h Volume",
//     marketPrice: "$1.32T",
//     volumePrice: "$42.8B",
//     chart: priceChart,
//     solana: false,
//   },
//   {
//     title: "Solana Price",
//     price: ["$156.91", "SOL"],
//     market: "Users Staking",
//     volume: "Average APR",
//     marketPrice: "378,250",
//     volumePrice: "6.35%",
//     chart: stakedChart,
//     solana: true,
//   },
// ];

// // transaction data
// const TransactionCardData = [
//   {
//     img: "",
//     name: "Trust Wallet",
//     price: "16,545",
//   },
//   {
//     img: "",
//     name: "Metamask",
//     price: "47,720",
//   },
//   {
//     img: "",
//     name: "Coinbase",
//     price: "32,450",
//   },
// ];

// export default function CryptoCharts() {
//   return (
//     <section className="px-8 py-10">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-6">Crypto Dashboard</h2>
//         <div className="grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-1 lg:gap-x-5 gap-y-5">
//           <div className="col-span-4 lg:grid grid-cols-2 lg:space-y-0 space-y-5 gap-5">
//             {ChartsCardData.map((props, key) => (
//               <ChartsCard key={key} {...props} />
//             ))}
//           </div>
//           <div className="col-span-full xl:col-span-1 w-full md:grid md:grid-cols-3 xl:grid-cols-1 gap-5 md:space-y-0 xl:space-y-5">
//             {TransactionCardData.map((props, key) => (
//               <TransactionCard key={key} {...props} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
