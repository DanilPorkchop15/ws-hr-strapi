import { Flex, Loader, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { memo } from 'react';
import { specialityApi } from '../entities/specialities';
import { Page } from '@strapi/strapi/admin';
import { GenerateLinkFeature } from '../features/GenerateLink';

export const HomePage = () => {

  const { isLoading, error } = specialityApi.useGetSpecialitiesQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Flex direction="column" gap={6} alignItems="flex-start">
      <Page.Title>Генерация ссылки</Page.Title>
      <h1 style={{ fontSize: 24 }}>Выбор задания</h1>
      <GenerateLinkFeature/>
    </Flex>
  );
};

export const Component = memo(HomePage);
