import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Home = ({ title, subtitle }) => (
  <div className="flex h-screen">
    <div className="m-auto text-center">
      <StaticImage
        className="w-72 h-72 rounded-full mb-4"
        src="../images/personal.jpeg"
        alt="Samuel Slade"
      />

      <div className="text-3xl font-bold text-sky-500 dark:text-sky-400">
        {title}
      </div>
      <div className="text-gray-700 dark:text-gray-500">{subtitle}</div>
    </div>
  </div>
)

export default Home
