import { memo, useEffect, useState } from "react";
import { SpecialitySelect } from '../../../entities/specialities/ui';
import { specialityApi } from '../../../entities/specialities';
import { Flex, Loader } from '@strapi/design-system';
import { GenerateLink } from './GenerateLink';
import { getRandomTaskId } from '../lib';

export const GenerateLinkFeature  = memo(function GenerateLinkFeature() {
  const { data, isLoading, error } = specialityApi.useGetSpecialitiesQuery();
  const [selectedSpeciality, setSelectedSpeciality] = useState<number | undefined>();

  const taskId = data && selectedSpeciality ? getRandomTaskId(data?.data, selectedSpeciality) : undefined

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (
    data?.data.every(({ isActive }) => !isActive)
    || data?.data.every(({ tasks }) => tasks.length === 0)
    || data?.data.every(({ tasks }) => !tasks.every(({ isActive }) => !isActive))
  ) {
    return <p>Для выбора задания необходимо добавить хотя бы одну активную специальность и хотя бы одно активное задания для нее.</p>
  }

  const handleSelect = (specialityId: number) => {
    specialityId && setSelectedSpeciality(data?.data.find(({ id }) => id === specialityId)?.id);
  }


  return (
    <Flex direction="column" gap={6} alignItems="flex-start">
      <SpecialitySelect onSelect={handleSelect} specialities={data?.data} />
      <GenerateLink task={taskId} />
    </Flex>
  )
})
