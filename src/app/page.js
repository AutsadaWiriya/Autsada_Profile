"use client";
import React from "react";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Experince from "@/components/Experince";

export default function Home() {
  return (
    <>
      <main className="bg-[#04051C]">
        <Header />
        <section id="Info"><Info /></section>
        <section id="Experince"><Experince/></section>
      </main>
    </>
  );
}
