import {Translation} from '@jsverse/transloco';
import {Language} from './Language';

export async function provideGlobalTranslations(
  language: Language,
): Promise<Translation> {
  switch (language) {
    case 'es':
      return (await import('../../../assets/i18n/es.json')).default;
    case 'en':
      return (await import('../../../assets/i18n/en.json')).default;
    case 'de':
      return (await import('../../../assets/i18n/de.json')).default;
  }
}
