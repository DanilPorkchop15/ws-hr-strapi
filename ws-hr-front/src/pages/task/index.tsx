import { memo } from "react";
import { useParams } from "react-router";

import { TaskWidget } from "widgets/task";

export const TaskPage = () => {
  const { uuid } = useParams();
  document.title = "WS | Тестовое задание";
  return (
    <TaskWidget uuid={uuid} />
  );
};

export const Component = memo(TaskPage);
