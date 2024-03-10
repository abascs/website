'use client'
import Link from 'next/link'
import React, {useEffect, useState } from 'react'

function header() {
    let [state,setState]=useState(false)
    let [state1,setState1]=useState(false)
  return (
    <>
    <header className="flex justify-between text-nowrap items-center py-4 px-8 shadow mb-2">
            <img src="./img/logo.png" alt="logo" className="w-28 xl:w-36"/>
            <img onClick={()=>{setState1(!state1)}} id="mbtn" src="./img/menu.png" className="w-10 lg:hidden"/>
            <div className="w-2/3 hidden lg:block">
                <ul className="flex justify-end gap-10 lg:gap-16 items-center text-lg font-bold *:cursor-pointer">
                <li><Link href={"#contactUs"}>اتصل بنا</Link></li>
                <li><Link href={"#team"}>فريف</Link></li>
                <li><Link href={"#services"}>خدمات</Link></li>
                <li><Link href={"#about"}>حول</Link></li>
                    <li>الصفحه الريسيه</li>
                    <button onClick={()=>{setState(!state)}} className=" border-black border border-b-4 border-r-4  px-8 py-2 active:border-b-2 active:border-r rounded-md">My CV</button>
                    <div className={`${state?" h-96 border-black border border-b-4 border-r-2":""} flex h-0 overflow-hidden transition-all duration-300 ease-linear w-64 top-20 bg-white absolute right-3   flex-col justify-around items-center`}>
                        <button  className="hover:bg-[#9AE975]  border-black border border-b-4 border-r-4  px-8 py-2 active:border-b-2 active:border-r rounded-md">Download My CV Png</button>
                        <button  className="hover:bg-[#9AE975]  border-black border border-b-4 border-r-4  px-8 py-2 active:border-b-2 active:border-r rounded-md">Download My CV Pdf</button>
                    </div>
                </ul>
            </div>
        </header>
        <div className={`${state1?'h-96 border-black border border-b-4 border-r-2 ':''} h-0 flex flex-col transition-all duration-300 ease-linear overflow-hidden w-64 top-20   absolute right-3`}>
            <ul className="flex flex-col justify-around items-center h-full bg-white text-end auto-rows-auto">
                <li>صفحه رئيسيه</li>
                <li><Link href={"#about"}>حول</Link></li>
                <li><Link href={"#services"}>خدمات</Link></li>
                <li><Link href={"#team"}>فريف</Link></li>
                <li><Link href={"#contactUs"}>اتصل بنا</Link></li>
            </ul>
        </div>
    </>
  )
}

export default header