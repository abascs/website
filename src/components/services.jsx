import React from 'react'

function services() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:px-28 gap-10 my-10">
            <div className=" h-64 w-11/12 mx-auto border border-black rounded-xl border-r-2 border-b-4 grid grid-cols-2 grid-rows-2 grid-flow-col justify-items-center items-center pl-10">
                <div className="row-span-2 flex flex-col h-full justify-center gap-8 items-start">
                    <p className="text-3xl font-bold">تطوير المواقع</p>
                    <img src="./img/arrow.svg" className="size-10" alt=""/>
                </div>
                <div style={{backgroundImage: "url('./img/app.gif')"}} className="w-full h-full row-span-2 bg-contain bg-no-repeat bg-center"></div>
            </div>
            <div className=" h-64 w-11/12 mx-auto border border-black rounded-xl border-r-2 border-b-4 grid grid-cols-2 grid-rows-2 grid-flow-col justify-items-center items-center pl-10">
                <div className="row-span-2 flex flex-col h-full justify-center gap-8 items-start">
                    <p className="text-3xl font-bold">خدمات صيانه</p>
                    <img src="./img/arrow.svg" className="size-10" alt=""/>
                </div>
                <div style={{backgroundImage: "url('./img/fix.svg')"}} className="w-full h-full row-span-2 bg-contain bg-no-repeat bg-center"></div>
            </div>
            <div className=" h-64 w-11/12 mx-auto border border-black rounded-xl border-r-2 border-b-4 grid grid-cols-2 grid-rows-2 grid-flow-col justify-items-center items-center pl-10">
                <div className="row-span-2 flex flex-col h-full justify-center gap-8 items-start">
                    <p className="text-3xl font-bold">تطوير سيرفرات</p>
                    <img src="./img/arrow.svg" className="size-10" alt=""/>
                </div>
                <div style={{backgroundImage:"url('./img/server.svg')"}} className="w-full h-full row-span-2 bg-contain bg-no-repeat bg-center"></div>
            </div>
            <div className=" h-64 w-11/12 mx-auto border border-black rounded-xl border-r-2 border-b-4 grid grid-cols-2 grid-rows-2 grid-flow-col justify-items-center items-center pl-10">
                <div className="row-span-2 flex flex-col h-full justify-center gap-8 items-start">
                    <p className="text-3xl font-bold">نصائح من خبراء</p>
                    <img src="./img/arrow.svg" className="size-10" alt=""/>
                </div>
                <div style={{backgroundImage:"url('./img/advice.svg')"}} className="w-full h-full row-span-2 bg-contain bg-no-repeat bg-center"></div>
            </div>
        </div>
  )
}

export default services