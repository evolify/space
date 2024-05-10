"use client"
import { useEffect } from "react";
import {frame} from "./particle"

export default function Home() {
  useEffect(()=>{
    frame()
  },[])
  return (
    <main>
      <canvas className="w-screen h-screen" id="canvas"></canvas>
    </main>
  );
}
