import React from "react";
import TodoInfoItem from "@/app/_components/TodoInfoItem";

async function TodoInfo() {
  try {
    // console.log("check", id);
    const res = await fetch(`http://localhost:33088/api/todoList/1`);
    const data: TodoResponse = await res.json();

    if (data) {
      return (
        <div>
          <TodoInfoItem data={data} />
        </div>
      );
    }
  } catch (e) {
    console.log(e);
  }
}

export default TodoInfo;
