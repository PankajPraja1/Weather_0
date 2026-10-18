import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container mx-auto my-6 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-center bg-amber-50 dark:bg-amber-900 dark:text-white my-6 p-4 rounded-lg shadow-lg dark:shadow-amber-700">
            <Image src="/logo.png" alt="WeatherX Logo" width={200} height={200}/>

            <h1 className="font-bold text-4xl text-center p-4">Check your weather with Weather<span className='text-blue-500'>X</span></h1>
          </div>

          <div className="mx-auto px-4 py-6 bg-blue-100 dark:bg-blue-900 dark:text-white rounded-lg shadow-lg dark:shadow-blue-700 my-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center p-4">
              Weather, Beyond the Forecast.
            </h2>

            <div>
              <p className="text-center text-slate-700 dark:text-slate-200 leading-7 p-2">
                WeatherX brings you real-time weather updates and forecasts for cities around the world, helping you plan your day with confidence.
              </p>

              <p className="text-center text-slate-700 dark:text-slate-200 leading-7 p-2">
                Explore current conditions, track hourly changes, and discover what&apos;s ahead — all in one place.
              </p>
            </div>

            <p className="text-center font-semibold p-3">
              Your Sky. Your Forecast. Your WeatherX.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
