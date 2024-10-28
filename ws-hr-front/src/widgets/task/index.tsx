import { memo } from "react";

import { TaskCardView } from "entities/task";
import { taskLinkApi } from "entities/taskLink";

export const TaskWidget = memo(function TaskWidget({ uuid }: { uuid?: string }) {
  const { data, isLoading, error } = taskLinkApi.useGetTaskLinkQuery(String(uuid));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ссылка недействительна или уже использована</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center text-3xl font-bold">Тестовое задание</h1>
      <TaskCardView task={data.task} />
      <p>
        На выполнение задания дается 40 минут. Не забудьте включить запись экрана. По окончании решения выложите запись
        в облако и отправьте ссылку на нее ответным письмом На перезагружайте страницу – ссылка на задание является
        одноразовой.
      </p>
    </div>
  );
});
