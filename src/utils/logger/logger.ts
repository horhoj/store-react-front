import { WHETHER_TO_DISPLAY_LOGGER_MESSAGES } from '../../config/app';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logger = (title: string, ...arg: any): void => {
  if (WHETHER_TO_DISPLAY_LOGGER_MESSAGES) {
    // eslint-disable-next-line no-console
    console.log(`LOGGER: ${title}`, ...arg);
  }
};
