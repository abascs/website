import React from 'react'

function nav() {
  return (
    <div className="w-full flex md:px-20 md:flex-row mt-10 justify-around flex-col bg-white">
            <img src="./img/app.gif" alt="main logo" className="w-8/12 md:w-1/2 mx-auto"/>
            <div dir="rtl" className="w-10/12 mx-auto flex flex-col justify-end items-start gap-6 md:justify-center">
                <p className="text-4xl lg:text-6xl ">#المبرمج عباس<br/> لبرمج مواقع</p>
                <p className=" lg:text-3xl mx-auto mt-5">بكلوريوس علوم حاسوب فرع امنية الحاسوب و امن السيبراني من جامعة التكنولوجيه . </p>
                <p className=" lg:text-3xl mx-auto mt-0">تحميل السيره الذاتيه من الزر ادناه مشاريع السابقه من خلال صفحه الرئيسيه للموقع</p>
                <button className="border-black border border-b-4 border-r-4  px-6 py-2 active:border-b-2 active:border-r rounded-md peer"><a download href="img/down.jpg">My CV</a></button>
            </div>
        </div>
  )
}

export default nav