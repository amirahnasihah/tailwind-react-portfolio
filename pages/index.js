import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiHashnode, SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";
import Image from "next/image";
import blender from "../public/3d.png";
import bunga from "../public/bunga.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web4 from "../public/web4.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Amirah Nasihah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bunga.png" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-mono dark:text-teal-500 flex gap-2">
              <Image src={bunga} alt="logo" className="h-10 w-10" />
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-6xl ">
              Amirah Nasihah
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Front-end Development Student
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white font-semibold">
              I didn&apos;t have access to formal education in the field. So,{" "}
              <span className=" text-purple-600">
                {" "}
                I taught myself how to code{" "}
              </span>{" "}
              and started learning everything I could about tech.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-10 py-3 text-gray-600">
            <SiTwitter />
            <SiLinkedin />
            <SiGithub />
            <SiHashnode />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
            <Image
              src={blender}
              alt="avatar image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">What I do</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nesciunt voluptatem, voluptatum libero esse fugiat sunt illum
              laboriosam, aperiam, cum impedit reiciendis dolorem at odio ipsum.
              In at distinctio voluptate.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="design image" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, quam fugit veritatis placeat aliquid laborum quaerat
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="design image" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, quam fugit veritatis placeat aliquid laborum quaerat
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                alt="design image"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, quam fugit veritatis placeat aliquid laborum quaerat
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate consequuntur fugit quaerat providene cumque optio quas!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elitre dolor
              tempore, coratione non asperiores quibusdam amet nam! Corporis?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
          </div>
        </section>

        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ?? 2023{" "}
            <a
              href="https://github.com/amirahnasihah/tailwind-react-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-teal-500"
            >
              GitHub Repo
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
