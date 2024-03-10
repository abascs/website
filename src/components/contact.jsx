import React from 'react'

function contact() {
  return (
    <div className="px-4 mx-auto my-10 py-6 gap-4 w-11/12 bg-slate-300 rounded-lg grid sm:grid-cols-2 lg:h-96">
            <div dir="rtl" className="flex flex-col justify-around items-start gap-6">
                <h1 className="font-bold text-2xl lg:text-4xl">للتواصل و استفسار</h1>
                <p className="text-lg lg:text-2xl">اضف معلومات كامل للخدمه وسنتواصل معك باقرب وقت ممكن. نشكركم لاختياركم خدمات عراقيه و ايدي عامله عراقيه باكامل</p>
                <a href="mailto:iraghawael207@gmail.com" target="_blank"><button className="bg-black text-white px-3 py-2 rounded-md">نواصل معنا</button></a>
            </div>
            <div style={{backgroundImage: "url('./img/main.svg')"}} className="hidden sm:block w-full h-full bg-contain bg-no-repeat bg-center"></div>
    </div>
  )
}

export default contact