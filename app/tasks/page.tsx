import { AppFrame } from "../components/AppFrame";
import { TaskBoard } from "../components/TaskBoard";

export default function TasksPage() {
  return (
    <AppFrame
      action="Local task board"
      active="Tasks"
      description="Combine flexible tasks with calendar blocks so Aautocal can turn goals into scheduled work."
      eyebrow="Task command center"
      title="Tasks that know your calendar"
    >
      <TaskBoard />
    </AppFrame>
  );
}
