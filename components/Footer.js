import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-base-200/80 to-base-200">
      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                href="/#"
                aria-current="page"
                className="flex gap-2 justify-center md:justify-start items-center"
              >
                <Image
                  src={logo}
                  alt={`${config.appName} logo`}
                  priority={true}
                  className="w-6 h-6"
                  width={90}
                  height={19}
                />
                <strong className="font-extrabold tracking-tight text-base md:text-lg text-base-content">
                  {config.appName}
                </strong>
              </Link>

              <p className="mt-3 text-sm text-base-content/90">
                {config.appDescription}
              </p>
              <p className="mt-3 text-sm text-base-content/80">
                Copyright © {new Date().getFullYear()} - All rights reserved
              </p>
            </div>

            <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 bg-gradient-to-r from-primary/90 to-secondary/90 bg-clip-text text-transparent font-bold">
                  LINKS
                </div>

                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                  {config.mailgun.supportEmail && (
                    <a
                      href={`mailto:${config.mailgun.supportEmail}`}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                      aria-label="Contact Support"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Support
                    </a>
                  )}
                  <Link href="https://www.tiktok.com/@ddscodexia?_t=8sf46G0t8fm&_r=1" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                    </svg>
                    TikTok
                  </Link>
                  <Link href="https://www.instagram.com/codexiadds/profilecard/?igsh=d2F2cncweHkyZDFt" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </Link>
                  <a href="/#" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X
                  </a>
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 bg-gradient-to-r from-primary/90 to-secondary/90 bg-clip-text text-transparent font-bold">
                  LEGAL
                </div>

                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                  <Link href="/tos" className="link link-hover">
                    Terms of services
                  </Link>
                  <Link href="/privacy-policy" className="link link-hover">
                    Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
