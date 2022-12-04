import { FC } from 'react';
import { Persona, PersonaPresence, PersonaSize } from '@fluentui/react';
import { useCas } from '../../hook/useCas';
import { resolveUsernameInitials } from '../../core/cas/resolveUsernameInitials';
import useCmsIdentity from '../../hook/useCmsIdentity';

interface UserPersonaProps {
  id: number | 'me';
  username?: string;
  size?: PersonaSize;
}

export const UserPersona: FC<UserPersonaProps> = ({ id, username, size }) => {
  const { getIdentity } = useCmsIdentity();
  const { getUserStatus } = useCas();
  const identity = getIdentity();

  return (
    <Persona
      imageUrl={id === 'me' ? identity?.avatarUrl : undefined}
      imageInitials={username ? resolveUsernameInitials(username) : '?'}
      size={size ?? PersonaSize.size24}
      presence={(id === 'me' ? PersonaPresence.online : getUserStatus(id)) as PersonaPresence}
      imageAlt={username ?? (id === 'me' ? identity?.fullName ?? identity?.username : undefined) ?? 'Avatar'}
    />
  );
};
