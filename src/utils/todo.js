export const INIT_TODOS = [
  {
    name: "React Presentation",
    done: false
  },
  {
    name: "BCE Report",
    done: true
  },
  {
    name: "Push this to github",
    done: false
  }
];

export const _add_todo = (name, todos) => [
  ...todos,
  {
    name,
    done: false
  }
];

export const _remove_todo = (remove_ind, todos) =>
  todos.filter((_, ind) => ind !== remove_ind);

export const _mark_todo = (mark_ind, todos) =>
  todos.map((todo, ind) => {
    if (ind !== mark_ind) return todo;
    return {
      ...todo,
      done: !todo.done
    };
  });
