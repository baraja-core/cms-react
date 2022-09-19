import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { apiClient } from '../../../redux/apiClient';

export interface PluginComponent {
  key: string;
  name: string;
  tab: string;
  source: string;
  position: number;
  params: Record<string, string | number | null>;
}

interface PluginStructure {
  staticAssets: { format: string; url: string }[];
  title?: string;
  activeKey: string;
  components: PluginComponent[];
}

interface PluginCanvasProps {
  name: string;
}

const PluginCanvas: FC<PluginCanvasProps> = ({ name }) => {
  const [structure, setStructure] = useState<PluginStructure>();

  useEffect(() => {
    apiClient.get<PluginStructure>(`api/v1/cms/plugin?name=${name}`).then((response) => setStructure(response.data));
  }, [name]);

  return (
    <Box>
      Plugin:
      <hr />
      {JSON.stringify(structure)}
    </Box>
  );
};

export default PluginCanvas;
