import { Loader, Main, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { memo } from 'react';
import { specialityApi } from '../entities/specialities';

export const HomePage = () => {

  const { data, isLoading, error } = specialityApi.useGetSpecialitiesQuery()

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Main>
      <SingleSelect placeholder="Выберите специальность">
        {data?.data.map((speciality) => (
          <SingleSelectOption key={speciality.id} value={speciality.id}>
            {speciality.name}
          </SingleSelectOption>
        ))}
      </SingleSelect>
    </Main>
  );
};

export const Component =  memo(HomePage);
