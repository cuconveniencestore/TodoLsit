import TodoList from "@/app/_components/TodoList";

export default async function Home() {
  try {
    const res = await fetch("http://localhost:33088/api/todolist");
    const data: TodoListResponse = await res.json();

    return (
      <main>
        <TodoList data={data} />
      </main>
    );
  } catch (e) {
    console.log(e);
  }
}
