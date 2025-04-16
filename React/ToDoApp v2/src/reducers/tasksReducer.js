import { CrueltyFree } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

export default function taskReducer(currentTasks, { type, payload }) {
  switch (type) {
    case "adding": {
      const newTask = {
        id: uuidv4(),
        isCompleted: false,
        title: payload.newTitle,
        details: "",
      };
      const newTasks = [...currentTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }
    case "delete": {
      let newTasks = currentTasks.filter((t) => t.id !== payload.taskId);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }
    case "update": {
      let updatedTasks = currentTasks.map((t) => {
        if (t.id === payload.task.id) {
          t.title = payload.task.title;
          t.details = payload.task.details;
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "get": {
      let storedTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
      return storedTasks;
    }
    case "checkIsCompleted": {
      let newTasks = currentTasks.map((task) => {
        if (task.id === payload.id) {
          const newTask = { ...task, isCompleted: !task.isCompleted };
          return newTask;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }
    default: {
      throw Error("Unexcbected type", type);
    }
  }
}
