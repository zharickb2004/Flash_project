import React from "react";

function Pagination() {
  return (
    <>
      <html>
        <body>
          <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible bg-gray-50">
            <nav>
              <ul class="flex">
                <li>
                  <a
                    class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                    href="/"
                    aria-label="Previous"
                  >
                    <svg
                      class="h-8 w-8 text-gray-420"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <line x1="19" y1="12" x2="5" y2="12" />{" "}
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out"
                    href="/"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                    href="/"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                    href="/"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                    href="/"
                    aria-label="Next"
                  >
                    <svg
                      class="h-8 w-8 text-gray-420"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </body>
      </html>
    </>
  );
}

export default Pagination;
