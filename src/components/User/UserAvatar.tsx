import { FC } from 'react';
import { Avatar } from '@mui/material';
import useCmsIdentity from '../../hook/useCmsIdentity';

interface UserAvatarProps {
  size?: number;
  centered?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({ size, centered }) => {
  const { getIdentity } = useCmsIdentity();
  const identity = getIdentity();
  const realSize = `${size ?? 32}px`;

  return (
    <Avatar
      src={identity?.avatarUrl}
      alt={identity?.fullName ?? identity?.username ?? 'Avatar'}
      sx={{ width: realSize, height: realSize, ...(centered ? { margin: 'auto' } : {}) }}
    />
  );
};
