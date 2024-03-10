import React from "react";

function note() {
  return (
    <>
    <div id="contactUs"
      dir="rtl"
      className=" px-2 md:px-10 mx-auto my-10 py-4 gap-4 w-11/12 bg-slate-300 rounded-lg flex flex-col justify-around items-start"
    >
      <h1 className="font-bold text-2xl">انصنع شئ جديد</h1>
      <p className="text-lg">
        للتواصل من اجل مشاريع و استفسار او توضيف يرجى دخول لصفحه اتصال او من خلال رابط .
      </p>
      <a href="mailto:iraghawael207@gmail.com" target="_blank"><button className="bg-black text-white px-3 py-2 rounded-md">نواصل معنا</button></a>
    </div>
    <div id='services' dir="rtl" className="w-10/12 mx-auto flex flex-col justify-start items-start px-4 gap-4 mt-20">
            <p className="bg-[#9AE975] px-2 rounded-md text-3xl font-bold">الخدمات</p>
            <p >مشروع التخرج و مواقع التي قمت ببنائها خلال رحلتي في جامعه وبعض خبرات في برمجه</p>
        </div>
    </>
  );
}

export default note;
