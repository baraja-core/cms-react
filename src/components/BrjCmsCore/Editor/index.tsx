import { FC, useState } from 'react';
import { Box, CircularProgress, TextField } from '@mui/material';
import { hash } from '../../../core/security/hash';

interface EditorProps {
  value: string;
  label?: string;
  rows?: number;
}

const Editor: FC<EditorProps> = ({ value, label, rows }) => {
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const labelId = `cms-editor--${hash(label ?? '')}`;

  const renderPreview = () => {
    if (!content) {
      return;
    }
    setLoading(true);
    fetch('/cms/render-editor-preview', {
      method: 'POST',
      body: JSON.stringify({ haystack: content }),
    })
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setPreview(data.html);
      });
  };

  return (
    <Box>
      <Box>
        {label && <label htmlFor={labelId}>{label}</label>}
        <Box>
          <Box>
            <Box title="Editor">
              <TextField value={content} id={labelId} minRows={rows ? rows : 5} sx={{ border: 0 }} />
            </Box>
            <Box title="Preview" onClick={() => renderPreview()}>
              {!content ? (
                <Box>
                  <i>Empty preview.</i>
                </Box>
              ) : (
                <Box>{loading ? <CircularProgress /> : <Box>{preview}</Box>}</Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderBottom: 0 }}>
          <Box sx={{ fontSize: '10pt' }}>
            <a href="https://brj.cz/markdown" target="_blank">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" version="1.1">
                <path
                  fill-rule="evenodd"
                  d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"
                />
              </svg>
              Styling with Markdown is supported
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Editor;
