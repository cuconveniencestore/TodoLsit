"use client";
import React from "react";
import TodoInfo from "@/app/_components/TodoInfo";

async function page() {
  console.log("check", params);
  return (
    <main>
      <TodoInfo id={params} />
      {params.id}
    </main>
  );
}

export default page;
