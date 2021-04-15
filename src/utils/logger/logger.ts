import { WHETHER_TO_DISPLAY_LOGGER_MESSAGES } from '../../config/app';

export const logger = (title: string, ...arg: any) => {
  if (WHETHER_TO_DISPLAY_LOGGER_MESSAGES)
    console.log(`LOGGER: ${title}`, ...arg);
};
