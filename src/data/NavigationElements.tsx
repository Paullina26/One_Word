import { routes } from '@data/routes';

export const baseNavigation = {
  Learning: [
    {
      to: `${routes.LEARN_TODAYS_WORD.to}`,
      name: `${routes.LEARN_TODAYS_WORD.name}`,
    },
    {
      to: `${routes.LEARN_HANGMAN.to}`,
      name: `${routes.LEARN_HANGMAN.name}`,
    },
    {
      to: `${routes.LEARN_TRANSLATE.to}`,
      name: `${routes.LEARN_TRANSLATE.name}`,
    },
    {
      to: `${routes.LEARN_FLASHCARD.to}`,
      name: `${routes.LEARN_FLASHCARD.name}`,
    },
    {
      to: `${routes.LEARN_REPEAT.to}`,
      name: `${routes.LEARN_REPEAT.name}`,
    },
  ],
  Settings: [
    {
      to: `${routes.SETTINGS_ADD_WORDS.to}`,
      name: `${routes.SETTINGS_ADD_WORDS.name}`,
    },
    {
      to: `${routes.SETTINGS_LEARNING.to}`,
      name: `${routes.SETTINGS_LEARNING.name}`,
    },
    {
      to: `${routes.SETTINGS_USER.to}`,
      name: `${routes.SETTINGS_USER.name}`,
    },
  ],
};

export const chatNavigation = {
  to: `${routes.LEARN_CHAT.to}`,
  name: `${routes.LEARN_CHAT.name}`,
};
