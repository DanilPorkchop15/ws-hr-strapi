import { PLUGIN_ID } from '../config';

const getTranslation = (id: string) => `${PLUGIN_ID}.${id}`;

export { getTranslation };
