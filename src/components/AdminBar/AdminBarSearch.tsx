import { FC, useState } from 'react';
import { Box, Container, IconButton, TextField } from '@mui/material';
import { Color } from '../../ui/palette';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Card from '../../ui/Card';

const AdminBarSearch: FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <Box sx={{ transition: 'all .3s ease-in-out' }}>
      <IconButton onClick={() => setOpen(!open)}>
        <SearchIcon sx={{ color: Color.White }} />
      </IconButton>
      {open && (
        <Box sx={{ display: 'flex', position: 'fixed', left: 0, top: 0, width: '100%', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Container>
              <Card>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
                <h2>Search...</h2>
                <TextField
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  size="small"
                  placeholder="Search..."
                  sx={{ color: 'white', background: '#333' }}
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
              </Card>
            </Container>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AdminBarSearch;
