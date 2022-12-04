export const resolveUsernameInitials = (username: string) =>
  username
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .replace(/[^a-zA-Z0-9\s.]/g, '')
    .trim()
    .split(' ')
    .map((word) => (word.match(/^(.+)\.$/) ? '' : word[0]))
    .join('') || '?';
