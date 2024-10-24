import { Speciality } from '../../../entities/specialities';

export const getRandomTaskId = (specialities?: Speciality[], specialityId?: number) => {
  if (!specialities || !specialityId) {
    return;
  }

  const speciality = specialities.find(({ id }) => id === specialityId);

  if (!speciality) {
    return;
  }

  const activeTasks = speciality.tasks.filter(({ isActive }) => isActive);

  return activeTasks[Math.floor(Math.random() * activeTasks.length)].id;
}
