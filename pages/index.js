import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import devjosh from "../public/joshuarosa.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Almodovar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by Jalmo1</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="curser-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Joshua Almodovar
            </h2>
            <h3 className="text-2xl py-2">Front end Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I am growing my programming skills and learning new things daily!
              Welcome to my portfolio and please reach out if you would like to
              collaborate!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={devjosh} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="min-h-screen py-3">
          <div className="text-center py-1">
            <h3 className="text-3xl py-1">What I offer</h3>
            <p className="text-md leading-8 text-gray-800">
              In the beginning of my developer journey, I was learning Python to
              build back end servers and now I mainly use Javascript and React
              to create beautiful web applications.
              <br />I have experience with working with big
              <span className="text-teal-500"> corporations</span> and also
              collaborating on
              <span className="text-teal-500"> open source</span> projects.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto pt-5"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p>
                I always strive to make my projects look modern with an strong
                emphasis on designing UX/UI forward applications.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use:</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto py-5"
              />
              <p>
                Writing clean semantic code is something I strive to perfect
                daily. Click my github link to checkout my projects and code.{" "}
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto py-5"
              />
              <p>
                I am always willing to help anyone in need. I also like to
                consult on projects and collaborate on projects.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
