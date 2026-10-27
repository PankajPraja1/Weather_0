import WeatherPage from "@/components/WeatherPage";

export const metadata = {
  title: 'Check Weather',
  description: 'This is the Weather Page where you can get the weather update for your city. You can search for any city and get the current weather information including temperature, humidity, wind speed and more.',
}

export default function Page() {
  return <WeatherPage />;
}