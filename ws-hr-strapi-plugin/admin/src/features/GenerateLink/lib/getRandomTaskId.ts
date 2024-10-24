import { Speciality } from '../../../entities/specialities';

export const getRandomTaskId = (specialities?: Speciality[], specialityId?: number) => {
  if (!specialities || !specialityId) {
    return;
  }
  const speciality = specialities.find(({ id }) => id === specialityId);

  if (!speciality) {
    return;
  }

  return speciality.tasks[Math.floor(Math.random() * speciality.tasks.length)].id;
}
