"use client";
import FinalResult from "@/components/FinalResult";
import NameComponent from "@/components/NameComponent";
import Demo from "@/components/use_callback";
import Memo from "@/components/use_memo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NameComponent name="Alim" />
      <FinalResult marks={80} subject="Math" />
      <Demo />
      <Memo />
    </div>
  );
}
