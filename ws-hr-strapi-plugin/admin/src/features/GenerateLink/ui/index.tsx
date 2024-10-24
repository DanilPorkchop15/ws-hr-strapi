import { memo, useState } from 'react';
import { SpecialitySelect } from '../../../entities/specialities/ui';
import { specialityApi } from '../../../entities/specialities';
import { Flex, Loader } from '@strapi/design-system';
import { GenerateLink } from './GenerateLink';
import { getRandomTaskId } from '../lib';

export const GenerateLinkFeature  = memo(function GenerateLinkFeature() {
  const { data, isLoading, error } = specialityApi.useGetSpecialitiesQuery();
  const [selectedSpeciality, setSelectedSpeciality] = useState<number | undefined>();

  const taskId = getRandomTaskId(data?.data, selectedSpeciality)

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data?.data.every(({ isActive }) => !isActive) || data?.data.every(({ tasks }) => !tasks.length)) {
    return <p>Для выбора задания необходимо добавить хотя бы одну активную специальность и хотя бы одно активное задания для нее.</p>
  }

  const handleSelect = (specialityId: number) => {
    specialityId && setSelectedSpeciality(data?.data.find(({ id }) => id === specialityId)?.tasks[0]?.id);
  }

  return (
    <Flex direction="column" gap={6} alignItems="flex-start">
      <SpecialitySelect onSelect={handleSelect} specialities={data?.data} />
      <GenerateLink task={taskId} />
    </Flex>
  )
})
