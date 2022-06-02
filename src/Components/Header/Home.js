import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../Redux/Action/Video";

const Home = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const { videos } = useSelector((state) => state.VideoData);
  console.log(videos);

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(getVideos(keyword));
  };
  useEffect(() => {}, [dispatch, keyword]);

  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <span class="ml-3 text-3xl font-bold">LOGO</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div>
              <form onSubmit={searchHandler}>
                <div class="relative text-lg bg-transparent text-gray-800 md:pl-96">
                  <div class="flex items-center   py-2">
                    <input
                      class=" text-sm  w-24 md:w-full px-2 leading-tight border rounded-full"
                      type="text"
                      required
                      placeholder="Search ..."
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                      type="submit"
                      class="absolute right-0 top-0 mt-3 mr-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            {videos &&
              videos.map((video) => (
                <div class="lg:w-1/4 md:w-2/4 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src={video.snippet.thumbnails.default.url}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {video.snippet.title}
                    </h3>
                    <h2 class="text-gray-900 title-font text-xs font-medium">
                      {video.snippet.description}
                    </h2>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
