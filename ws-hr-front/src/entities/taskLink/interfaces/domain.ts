import type { Task } from "entities/task/@x";

export interface TaskLink {
  id: number;
  uuid: string;
  task: Task;
  isValid: boolean;
}
