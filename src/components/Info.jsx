"use client";
import 'animate.css';

export default function Info() {
  return (
    <div className="flex flex-row justify-center flex-wrap-reverse min-h-screen items-center pt-24 gap-36 mx-20">
      <div className="flex flex-col space-y-10 w-156">
        <div className="animate__animated animate__zoomInDown">
          <h1 className="text-[#ED9510] text-2xl">Autsada Wiriya</h1>
          <p className="text-white">
            Hi My name is Aut. I study in Chiang Mai University. Nice to meet
            you!
          </p>
        </div>
        <div className="animate__animated animate__zoomInUp">
          <h1 className="text-[#ED9510] text-2xl">Skills</h1>
          <p className="text-white mt-4">Programming</p>
          <div className="flex flex-wrap gap-1.5">
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt=""
            />
          </div>
          <p className="text-white mt-4">Music</p>
          <div className="flex flex-wrap gap-2">
            <img
              className="w-10"
              src="https://em-content.zobj.net/thumbs/240/emojidex/112/trumpet_1f3ba.png"
              alt=""
            />
            <img
              className="w-10"
              src="https://em-content.zobj.net/thumbs/240/whatsapp/352/guitar_1f3b8.png"
              alt=""
            />
            <img
              className="w-10"
              src="https://em-content.zobj.net/thumbs/240/facebook/355/musical-keyboard_1f3b9.png"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="items-center w-156 relative animate__animated animate__pulse">
        <div className="rounded-full overflow-hidden w-80 absolute z-50">
          <img src="/img/Profile.jpg" alt="" />
        </div>
        <div className="rounded-full overflow-hidden border-4 border-[#ED9510] blur-3xl w-80">
          <img src="/img/Profile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
