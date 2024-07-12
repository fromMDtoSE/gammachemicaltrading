import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Clients() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      if (ul.nextSibling instanceof HTMLElement) {
        ul.nextSibling.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <div className="font-inter antialiased w-screen">
      <main className="flex flex-col justify-center bg-gray-800 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul
                ref={logosRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                    alt="Facebook"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                    alt="Disney"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                    alt="Airbnb"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                    alt="Apple"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg"
                    alt="Spark"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                    alt="Samsung"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                    alt="Quora"
                    width = {100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg"
                    alt="Sass"
                    width = {100}
                    height={100}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
