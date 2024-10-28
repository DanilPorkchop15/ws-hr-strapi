import { memo, useEffect, useState } from 'react';
import { SpecialitySelect } from '../../../entities/specialities/ui';
import { specialityApi } from '../../../entities/specialities';
import { Flex, Loader } from '@strapi/design-system';
import { GenerateLink } from './GenerateLink';
import {getRandomTaskId} from "../../../entities/specialities/lib";

export const GenerateLinkFeature = memo(function GenerateLinkFeature() {
  const { data, isLoading, error } = specialityApi.useGetSpecialitiesQuery();
  const [selectedSpeciality, setSelectedSpeciality] = useState<number | undefined>();

  const taskId =
    data && selectedSpeciality ? getRandomTaskId(data?.data, selectedSpeciality) : undefined;

  const activeSpecialities =
    data?.data.filter((sp) => sp.isActive && sp.tasks.some((task) => task.isActive)) || [];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (activeSpecialities.length === 0) {
    return (
      <p>
        Для выбора задания необходимо добавить хотя бы одну активную специальность и хотя бы одно
        активное задания для нее.
      </p>
    );
  }

  return (
    <Flex direction="column" gap={6} alignItems="flex-start">
      <SpecialitySelect onSelect={setSelectedSpeciality} specialities={activeSpecialities} />
      <GenerateLink task={taskId} />
    </Flex>
  );
});
