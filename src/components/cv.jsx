import React from 'react'

function cv() {
  return (
    <div id='about' dir="rtl" className="w-10/12 mx-auto flex flex-col justify-start items-start px-4 gap-4 mt-20">
            <p className="bg-[#9AE975] px-2 rounded-md text-3xl font-bold">الدراسه</p>
            <p >خريج علوم حاسوب قسم انميه الحاسوب من جامعه التكنولوجيه . خبره في تطوير مواقع تصميم و بناء واجهات مع قواعد بيانات متكامله</p>
            <ul className="list-disc list-inside">
                <h1>لغات برمجه و تقيات و اطر العمل</h1>
                <li>html</li>
                <li>css</li>
                <li>tailwindcss</li>
                <li>javascript</li>
                <li>next.js</li>
                <li>react</li>
                <li>mongoDB</li>
                <li>express</li>

            </ul>
        </div>
  )
}

export default cv