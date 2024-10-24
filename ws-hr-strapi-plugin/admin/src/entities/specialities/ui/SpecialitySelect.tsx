import React, { memo, useState } from 'react';
import { Flex, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { Speciality } from '../interfaces';

interface SpecialitySelectProps {
  specialities?: Speciality[];
  onSelect: (specialityId: number) => void;
}

export const SpecialitySelect = memo(function SpecialitySelect({ specialities = [], onSelect }: SpecialitySelectProps) {
  const [selectedSpeciality, setSelectedSpeciality] = useState<string | number | null>(null);

  const handleChange = (value: string | number) => {
      const specialityId = Number(value);
      setSelectedSpeciality(value); // Set the selected value in state
      onSelect(specialityId); // Trigger the onSelect callback with the selected id
  };

  return (
    <Flex direction="column" gap={2} alignItems="flex-start">
      <p style={{ fontSize: 14 }}>Специальность</p>
      <SingleSelect
        placeholder="Выберите специальность"
        value={selectedSpeciality} // Controlled value
        onChange={handleChange} // Handle change and set selected value
      >
        {specialities.map((speciality) => speciality.isActive && (
          <SingleSelectOption key={speciality.id} value={String(speciality.id)}>
            {speciality.name}
          </SingleSelectOption>
        ))}
      </SingleSelect>
    </Flex>
  );
});
