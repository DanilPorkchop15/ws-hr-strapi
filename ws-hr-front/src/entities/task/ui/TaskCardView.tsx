import Markdown from "react-markdown";

import { Card, CardContent } from "shared/ui";

import type { Task } from "../interfaces";

export const TaskCardView = ({ task }: { task: Task }) => {
  return (
    <Card>
      <CardContent className="m-10">
        <div className="prose lg:prose-xl">
          <Markdown>{task.text}</Markdown>
        </div>
      </CardContent>
    </Card>
  );
};
