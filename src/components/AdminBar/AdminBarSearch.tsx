import { FC, useState } from 'react';
import { Box, TextField } from '@mui/material';

const AdminBarSearch: FC = () => {
  const [query, setQuery] = useState('');

  return (
    <Box sx={{ width: '180px', transition: 'all .3s ease-in-out' }}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        size="small"
        placeholder="Search..."
        sx={{ color: 'white' }}
      />
      {query && (
        <Box
          sx={{
            position: 'absolute',
            background: 'white',
            width: '384px',
            webkitBoxShadow: '0 5px 16px 0 rgba(214, 206, 194, 0.5)',
            boxShadow: '0 5px 16px 0 rgba(214, 206, 194, 0.5)',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Autocomplete {query}
        </Box>
      )}
    </Box>
  );
};

export default AdminBarSearch;
