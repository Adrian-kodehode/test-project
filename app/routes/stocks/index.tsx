import React, { Suspense } from "react";

// Use React.lazy for dynamic import
const Chart = React.lazy(() => import("react-apexcharts"));

// Fix Material Tailwind imports with recommended CommonJS approach
import pkg from "@material-tailwind/react";
const { Card, CardBody, Typography, Button, CardFooter } = pkg;

import merge from "deepmerge";

// Define ApexCharts types
type ApexAxisChartSeries = {
  name: string;
  data: number[];
}[];

// line chart
interface ChartsPropsType {
  height: number;
  series: ApexAxisChartSeries;
  options: object;
}

// Use Suspense to handle the loading state
function AreaChart({
  height = 350,
  series,
  colors,
  options,
}: Partial<ChartsPropsType> & { colors: string | string[] }) {
  const chartOptions = React.useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: true,
            borderColor: "#EEEEEE",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          tooltip: {
            theme: "light",
          },
          yaxis: {
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
        },
        options ? options : {}
      ),
    }),
    [height, colors, options]
  );

  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <Chart
        type="area"
        height={height}
        series={series as ApexAxisChartSeries}
        options={chartOptions as any}
      />
    </Suspense>
  );
}

export function ChartsExample5() {
  return (
    <section className="m-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">$127,092.22</h3>
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="text-sm text-gray-600">2022</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-600">2023</span>
          </div>
        </div>

        {/** chart */}
        <AreaChart
          colors={["#4CAF50", "#2196F3"]}
          options={{
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          }}
          series={[
            {
              name: "2022 Sales",
              data: [0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900],
            },
            {
              name: "2023 Sales",
              data: [
                200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800,
              ],
            },
          ]}
        />

        <div className="flex justify-between items-center mt-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Annual Sales Performance
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Year-to-Date sales comparison
            </p>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            View report
          </button>
        </div>
      </div>
    </section>
  );
}


export default ChartsExample5;
