import { v4 as uuidv4 } from 'uuid';

export const correlationId = () => uuidv4().replace(/-/g, '');
