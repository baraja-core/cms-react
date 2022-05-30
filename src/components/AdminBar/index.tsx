import { FC } from 'react';
import { Box } from '@mui/material';
import AdminBarIcon from './AdminBarIcon';
import AdminBarUser from './AdminBarUser';
import AdminBarSearch from './AdminBarSearch';

const AdminBar: FC = () => (
  <Box
    sx={{
      zIndex: 99999,
      position: 'fixed',
      left: 0,
      top: 0,
      background: '#1b1f23',
      width: '100%',
      maxWidth: '100vw',
      height: '45px',
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.05)',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    }}
  >
    <table>
      <tbody>
        <tr>
          <td
            role="banner"
            style={{
              minWidth: '60px',
              padding: '0 .75em',
            }}
          >
            <AdminBarIcon />
          </td>
          <td>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                padding: '0',
                margin: '0',
              }}
            >
              <li
                style={{
                  padding: '0 10px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <a href="http://localhost:81/baraja/nordic-craft.cz/www" className="btn btn-primary">
                  Home
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="http://localhost:81/baraja/nordic-craft.cz/www/admin" className="btn btn-primary">
                  Admin
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="http://localhost:81/baraja/nordic-craft.cz/www/api-documentation"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  API&nbsp;Doc
                </a>
              </li>
            </ul>
          </td>
          <td style={{ width: '100%' }} />
          <td className="admin-bar-panel">Content</td>
          <td className="admin-bar-panel">
            <AdminBarSearch />
          </td>
          <td role="navigation">
            <AdminBarUser />
          </td>
        </tr>
      </tbody>
    </table>
  </Box>
);

export default AdminBar;
