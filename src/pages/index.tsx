import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import resume from '../resume.pdf'
import SeoHead from "../components/seoHead"

const IndexPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-cursivetitle mb-8">
        Awais Isane
      </div>
      <div className="flex justify-center items-center mt-5 flex-wrap">
        <div className="flex flex-col items-center mx-4">
          <a href="https://X.com/6001k1d" className="border-none">
            <StaticImage src="../images/X_ico.svg" alt="X Icon" className="w-12 h-12" />
          </a>
          <span className="text-sm mt-2">X</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <a href="https://www.linkedin.com/in/awaisisane" className="border-none">
            <StaticImage src="../images/linkedin_ico.svg" alt="LinkedIn Icon" className="w-12 h-12" />
          </a>
          <span className="text-sm mt-2">LinkedIn</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <a href="https://github.com/AwaisIsane" className="border-none">
            <StaticImage src="../images/github-mark.svg" alt="GitHub Icon" className="w-12 h-12" />
          </a>
          <span className="text-sm mt-2">GitHub</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <a href="mailto:awaisisane@gmail.com" className="border-none">
            <StaticImage src="../images/mail_ico.svg" alt="Email Icon" className="w-12 h-12" />
          </a>
          <span className="text-sm mt-2">Email</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <a href={resume} download className="border-none">
            <StaticImage src="../images/resume.png" alt="Download CV Icon" className="w-12 h-12" />
          </a>
          <span className="text-sm mt-2">Resume</span>
        </div>
      </div>
    </div>
  )
}


export default IndexPage

export const Head: HeadFC = () => <SeoHead title=""></SeoHead>
