import { Main, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { memo } from 'react';

export const HomePage = () => {

  return (
    <Main>
      <h1>Welcome to BEBRA</h1>

      <SingleSelect label="test" placeholder="test">
        <SingleSelectOption value="test">test</SingleSelectOption>
        <SingleSelectOption value="test2">test2</SingleSelectOption>
        <SingleSelectOption value="test3">test3</SingleSelectOption>
      </SingleSelect>
    </Main>
  );
};

export const Component =  memo(HomePage);
