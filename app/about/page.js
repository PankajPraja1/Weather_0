import Link from "next/link";
import { FaGithub, FaCode, FaInstagram, FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "About us"
}

const About = () => {
  return (
    <main className="container mx-auto px-4 py-6 my-6">
      <section className="mb-6 pb-10 pt-4 bg-blue-100 dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-blue-800 dark:text-white">
        <h1 className="text-2xl font-bold text-center p-4">About WeatherX</h1>
        <h2 className="text-xl font-semibold text-center">Simple, reliable weather updates.</h2>
        <p className="text-slate-700 dark:text-slate-200 leading-7 p-2 text-center w-[80%] mx-auto">
          WeatherX helps you quickly understand the weather wherever you are,
          so you can plan your day with confidence. We keep weather information
          clear, useful, and easy to access.
        </p>
        <p className="text-slate-700 dark:text-slate-200 leading-7 p-2 text-center w-[80%] mx-auto">
          The goal is to provide a straightforward way to get weather updates without
          unnecessary clutter or confusion. WeatherX is designed to be fast, reliable,
          and easy to use, so you can focus on what matters most: your day.
        </p>
      </section>

      <section className="mb-6 mt-6 pt-4 pb-10 bg-blue-100 dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-blue-800 dark:text-white">
        <h1 className="text-2xl font-bold text-center p-4">Meet the Creator</h1>
        <p className="text-slate-700 dark:text-slate-200 leading-7 p-2 text-center w-[80%] mx-auto">
          WeatherX was created by <strong>Pankaj Prajapati</strong>, a developer who
          built this app to make checking the weather simpler and more helpful.
        </p>

        <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center gap-4 mt-4 px-4 lg:px-10 xl:px-40">
          <img src="/me.jpg" alt="Creator" width={120} height={120} className="shadow-lg rounded-2xl" />

          <div className="flex flex-col justify-center items-center lg:items-start gap-1 px-3">
            <h2 className="font-bold text-lg text-blue-900 dark:text-blue-300">PANKAJ PRAJAPATI</h2>
            <p className="text-gray-700 dark:text-slate-300 pb-4">Creator of WeatherX · Web Developer</p>


            <div className="px-4 py-4 bg-blue-200 dark:bg-cyan-800 rounded-md"><p className="font-semibold pb-2">Building useful web experiences, one project at a time.</p>
              <p>"I'm a web developer passionate about building interactive, user-friendly applications. WeatherX is one of my projects, created to make checking weather conditions simple and intuitive."</p></div>
              
            <div className="flex flex-col justify-start items-start gap-2 mt-4">
              <h3 className="font-semibold">Built with :</h3>
              <ul className="list-none flex flex-wrap gap-3 list-inside px-4">
                <li className="bg-gray-300 dark:bg-gray-700 rounded-xl p-1 px-2">Next.js</li>
                <li className="bg-gray-300 dark:bg-gray-700 rounded-xl p-1 px-2">React</li>
                <li className="bg-gray-300 dark:bg-gray-700 rounded-xl p-1 px-2">Tailwind CSS</li>
                <li className="bg-gray-300 dark:bg-gray-700 rounded-xl p-1 px-2">OpenWeatherMap API</li>
              </ul>
            </div>

            <div className="flex flex-col justify-start items-start gap-2 mt-4">
              <h3 className="font-semibold">Find me online</h3>
              <ul className="list-none flex flex-wrap gap-3 list-inside px-4">
                <Link href="https://github.com/PankajPraja1/Weather_0" target="_blank" rel="noopener"><li className="bg-gray-200 dark:bg-gray-800 rounded-xl p-1 px-2 flex items-center gap-1.5 hover:underline hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"><FaGithub />GitHub</li></Link>
                <Link href={"https://www.linkedin.com/in/pankaj-prajapati-535024195"} target="_blank" rel="noopener"><li className="bg-gray-200 dark:bg-gray-800 rounded-xl p-1 px-2 flex items-center gap-1.5 hover:underline hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"><FaLinkedin />LinkedIn</li></Link>
                <Link href={"https://www.instagram.com/pankajprajapati0411/"} target="_blank" rel="noopener"><li className="bg-gray-200 dark:bg-gray-800 rounded-xl p-1 px-2 flex items-center gap-1.5 hover:underline hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"><FaInstagram />Instagram</li></Link>
                <Link href={"https://www.pankaj-prajapati.tech"} target="_blank" rel="noopener"><li className="bg-gray-200 dark:bg-gray-800 rounded-xl p-1 px-2 flex items-center gap-1.5 hover:underline hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"><FaCode />Portflio</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
