"use client"
import React, { useState, useEffect } from "react";
import { MdRefresh } from "react-icons/md";

const defaultCities = [
    {
        name: "Delhi",
        image: "https://deih43ym53wif.cloudfront.net/large_Rajpath-delhi-shutterstock_1195751923.jpg_7647e1aad2.jpg",
    },
    {
        name: "London",
        image: "https://www.foodandwine.com/thmb/xmr4QyNZGhzk3M0CdKK6DcvYtdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/London-City-Guide-Restaurants-FT-DGTL0726-hero-a4cd3c2fb4a243a188c1d14249df60cf.jpg",
    },
    {
        name: "New York",
        image: "https://cdn.sanity.io/images/nxpteyfv/goguides/3891a75f142b6e94613f464c4f68a607559122df-1600x1066.jpg",
    },
];

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [citiesWeather, setCitiesWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const [citiesLoading, setCitiesLoading] = useState(true);
    const [error, setError] = useState("");
    const [citiesError, setCitiesError] = useState("");
    const [refreshing, setRefreshing] = useState(false);

    // function to get the appropriate GIF based on the main weather condition
    const getWeatherGif = (weatherMain) => {
        const gifs = {
            Clear: "/weather/clear.gif",
            Clouds: "/weather/clouds.gif",
            Drizzle: "/weather/drizzle.gif",
            Rain: "/weather/rain.gif",
            Thunderstorm: "/weather/thunderstorm.gif",
            Snow: "/weather/snow.gif",
            Atmosphere: "/weather/fog.gif",
        };

        return gifs[weatherMain] || "/weather/clear.gif";
    };

    // reusable function to fetch weather data for a given city
    const fetchCityWeather = async (cityName) => {

        const response = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `Failed to fetch the weather of ${cityName}.`);
        }
        return data;
    };

    // fetch weather data for default cities on component mount
    useEffect(() => {
        const fetchDefaultCitiesWeather = async () => {
            setCitiesLoading(true);
            setCitiesError("");

            try {
                const weatherData = await Promise.allSettled(defaultCities.map(({ name }) => fetchCityWeather(name)));
                const successfulCities = weatherData.map((result, index) => {
                    if (result.status !== "fulfilled") {
                        return null;
                    }

                    return {
                        ...result.value,
                        cityImage: defaultCities[index].image,
                    };
                }).filter(Boolean);

                setCitiesWeather(successfulCities);

                if (successfulCities.length === 0) {
                    setCitiesError("Unable to load city weather.");
                }
            }

            catch (err) {
                setCitiesError(err.message || "Failed to fetch city weather.");
            }
            finally {
                setCitiesLoading(false);
            }
        };
        fetchDefaultCitiesWeather();
    }, []);


    // function to fetch weather data for the searched city
    const getWeather = async (e) => {
        e.preventDefault();

        if (!city.trim()) {
            setError("Please enter a city name.");
            return;
        }

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const data = await fetchCityWeather(city);
            setWeather(data);
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setCity(e.target.value)
    // }

    // const handleClick = () => {
    //     console.log(city)
    // }

    // Reusable weather card component to display weather data
    const WeatherCard = ({ data }) => (
        <div className="rounded-xl border border-gray-200 bg-white dark:bg-gray-900 p-5 shadow-sm">
            <img
                src={data.cityImage || getWeatherGif(data.weather[0].main)}
                alt={data.cityImage
                    ? `${data.name} cityscape`
                    : data.weather[0].description}
                className="h-56 w-full rounded-lg object-cover"
            />

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {data.name}, {data.sys.country}
                    </h2>
                    <p className="mt-1 capitalize text-gray-500 dark:text-gray-300">
                        {data.weather[0].description}
                    </p>
                </div>

                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                    className="h-16 w-16"
                />
            </div>

            <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
                {Math.round(data.main.temp)}°C
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Feels like</p>
                    <p className="font-medium">
                        {Math.round(data.main.feels_like)}°C
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Humidity</p>
                    <p className="font-medium">
                        {data.main.humidity}%
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Wind speed</p>
                    <p className="font-medium">
                        {data.wind.speed} m/s
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Temperature range</p>
                    <p className="font-medium">
                        {Math.round(data.main.temp_min)}° –{" "}
                        {Math.round(data.main.temp_max)}°C
                    </p>
                </div>
            </div>
        </div>
    );


    const refreshDefaultCities = async () => {
        setRefreshing(true);
        setCitiesError("");

        try {
            const results = await Promise.allSettled(
                defaultCities.map(({ name }) => fetchCityWeather(name))
            );

            const updatedCities = results
                .map((result, index) => {
                    if (result.status !== "fulfilled") {
                        return null;
                    }

                    return {
                        ...result.value,
                        cityImage: defaultCities[index].image,
                    };
                })
                .filter(Boolean);

            setCitiesWeather(updatedCities);

            if (updatedCities.length === 0) {
                setCitiesError("Unable to refresh weather. Please try again.");
            } else if (updatedCities.length < defaultCities.length) {
                setCitiesError("Some cities could not be refreshed.");
            }
        } catch {
            setCitiesError("Unable to refresh weather. Please try again.");
        } finally {
            setRefreshing(false);
        }
    };


    // JSX for the component
    return (
        <main>
            <section className="text-gray-600 dark:text-gray-200 body-font">
                <div className="container px-5 py-24 mx-auto w-full">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                            <div className="w-24 h-full bg-blue-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-gray-900 dark:text-gray-100 font-medium title-font text-2xl mb-2 sm:mb-0">Weather<span className='text-blue-500'>X</span></h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                                Search for your city and get the latest weather updates, forecasts, and more. Stay informed and plan your day with confidence using WeatherX.
                            </p>

                            <form
                                onSubmit={getWeather}
                                className="flex flex-col gap-3 sm:flex-row"
                            >
                                <input
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                    placeholder="Search a city"
                                    className="w-full rounded-lg border border-blue-200 dark:border-blue-700 bg-gray-100 dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Searching..." : "Search Weather"}
                                </button>
                            </form>

                            {error && (
                                <p role="alert" className="text-red-500 dark:text-red-400 mt-1 ml-3">
                                    {error}
                                </p>
                            )}

                        </div>
                    </div>

                    {/* Weather for the searched city */}
                    {weather && (
                        <section className="mb-12">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Weather in {weather.name}
                            </h2>

                            <WeatherCard data={weather} />
                        </section>
                    )}

                    {/* Weather for multiple default cities */}
                    <section className="mt-6">

                        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Weather Around the World
                            </h2>

                            <button
                                type="button"
                                onClick={refreshDefaultCities}
                                disabled={refreshing || citiesLoading}
                                className="flex items-center gap-2 rounded-lg bg-blue-500 dark:bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-600 dark:hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <span className={refreshing ? "animate-spin" : ""}>
                                    <MdRefresh size={24} />
                                </span>

                                {refreshing ? "Refreshing..." : "Refresh Weather"}
                            </button>
                        </div>


                        {citiesLoading && (
                            <p>Loading weather for cities...</p>
                        )}

                        {citiesError && (
                            <p role="alert" className="text-red-500 dark:text-red-400">
                                {citiesError}
                            </p>
                        )}

                        {!citiesLoading && citiesWeather.length > 0 && (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {citiesWeather.map((data) => (
                                    <WeatherCard
                                        key={data.id}
                                        data={data}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Weather