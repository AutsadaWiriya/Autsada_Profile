"use client";
import React from "react";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Head from "next/head";

export default function Home() {
  return (
    <>

      <main className="bg-[#04051C]">
        <Header />
        <Info />
      </main>
    </>
  );
}
