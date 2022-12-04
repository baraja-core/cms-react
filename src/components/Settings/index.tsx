import { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { SettingsOverview } from './SettingsOverview';

export const Settings = () => {
  const [selectedSection, setSelectedSection] = useState<number>(0);

  const sections: { label: string; icon?: ReactNode; element: ReactNode }[] = [
    { label: 'Overview', element: <SettingsOverview /> },
  ];

  const activeSection = Object.entries(sections)
    .map(([id, sectionItem]) => ({ id: id, section: sectionItem }))
    .find((item) => Number(item.id) === selectedSection)?.section;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '100%', maxWidth: '15em' }}>
        {Object.entries(sections).map(([id, section]) => (
          <Box key={id} onClick={() => setSelectedSection(Number(id))}>
            {section.label}
          </Box>
        ))}
      </Box>
      <Box sx={{ width: '100%' }}>
        {activeSection && (
          <Box>
            <h1>{activeSection.label}</h1>
            {activeSection.element}
          </Box>
        )}
      </Box>
    </Box>
  );
};
