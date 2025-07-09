"use client";



import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

const handleClick = async ()=>{
      const response = await fetch("http://localhost:3001/testcreatedata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Failed to create data");
        return;
      }
      const data = await response.json();
      console.log("Data created successfully:", data);
      alert("Data created successfully");
        }




export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-amber-700">
      helloo bhai 
    <button onClick={handleClick}> cerate data</button>
    </div>
  );
}
