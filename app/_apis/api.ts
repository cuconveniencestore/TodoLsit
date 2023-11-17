interface Props {
  _id: number;
  isDone: boolean;
}

export async function updateTodoInfoDone({ _id, isDone }: Props) {
  try {
    const res = await fetch(`http://localhost:33088/api/todolist/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({ done: isDone }),
    });
    const data: TodoListResponse = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
