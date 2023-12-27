import React from "react";

const SecondLoading = () => {
  return (
    <div>
      <div class="animate-pulse block-item shadow-md max-w-xl mx-auto mt-20 m-5">
        <div class="bg-gradient-to-t from-primary via-rose-600 to-pink-500 h-6 rounded-t-3xl "></div>
        <div class="py-4 px-6">
          <div class="flex items-center space-x-2">
            <div class="h-7 w-7 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full"></div>
            <div class="h-3 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-1/3"></div>
          </div>
          <div class="my-6">
            <div class="h-5 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-3/4"></div>
            <div class="my-4">
              <div class="h-3 my-2 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-full"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-5/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-4/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-5/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-3/6"></div>
              <div class="h-3 my-2 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-2/6"></div>
            </div>
          </div>
          <div class="my-4">
            <div class="h-11 bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-lg w-full"></div>
            <div class="h-3 my-4 mx-auto bg-gradient-to-t from-primary via-rose-600 to-pink-500 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLoading;
