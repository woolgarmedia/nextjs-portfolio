'use client'

import { FaceImageComponent } from "./components/image";
import { TypewriterH1 } from './components/typewriter';

export default function Page() {
  return (
    <section className="flex gap-4 bg-[url('/images/clouds.jpg')] h-screen justify-center items-center gap-2 px-6">
      <div className="">
        <p className='font-extrabold text-5xl tracking-tight text-off-white'>Hey,</p>
        <TypewriterH1 text='My name is Cal Woolgar' speed={200} className="font-extrabold text-5xl tracking-tight text-almost-black"/>
        <h2 className="font-medium text-3xl tracking-tight text-almost-black">
        I’m a full stack developer currently working for Three Rocks Ltd.
        </h2>
      </div>
      <div className="">
        <FaceImageComponent/>
      </div>
    </section>
  );
}