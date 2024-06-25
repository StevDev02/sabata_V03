import { SearcherShop } from "./Searcher_shop";

export function Searcher() {
  return (
    <div className="relative w-[340px] h-[38px]">
      <svg
        className="absolute top-[50%] left-[5%]  -translate-y-[50%] -translate-x-[50%]"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.502 2.24976C5.9456 2.24976 2.25195 5.94341 2.25195 10.4998C2.25195 15.0561 5.9456 18.7498 10.502 18.7498C12.5098 18.7498 14.351 18.0317 15.7812 16.8397L20.9413 21.9998C21.2342 22.2927 21.7091 22.2927 22.002 21.9998C22.2948 21.7069 22.2948 21.232 22.002 20.9391L16.8419 15.779C18.0339 14.3488 18.752 12.5076 18.752 10.4998C18.752 5.94341 15.0583 2.24976 10.502 2.24976ZM3.75195 10.4998C3.75195 6.77183 6.77403 3.74976 10.502 3.74976C14.2299 3.74976 17.252 6.77183 17.252 10.4998C17.252 12.3639 16.4973 14.0504 15.2749 15.2727C14.0526 16.4951 12.3661 17.2498 10.502 17.2498C6.77403 17.2498 3.75195 14.2277 3.75195 10.4998Z"
          fill="#71717a"
        />
      </svg>
      <SearcherShop
        className="absolute"
        type="text"
        placeholder="Tacones, blusas, faldas y mas..."
      />
      <div className="absolute flex items-center justify-center top-[50%] right-[5%] -translate-y-[50%] -translate-x-[50%] bg-white">
        <svg width="20" height="20" viewBox="0 0 256 256">
          <path
            fill="#71717a"
            d="M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"
          />
        </svg>
        <span className="text-[#71717a]">B</span>
      </div>
    </div>
  );
}
