import {Injectable} from '@angular/core';
import {Translation, TranslocoLoader} from '@jsverse/transloco';
import {Language} from './utils/Language';
import {provideGlobalTranslations} from './utils/provideGlobalTranslations';

@Injectable({providedIn: 'root'})
export class TranslocoMultiLoader implements TranslocoLoader {
  async getTranslation(lang: Language): Promise<Translation> {
    // FIXME: this is a very stupid way to load translations :(
    //  It should better be lazy-loaded per module!
    const translations = [
      await provideGlobalTranslations(lang),
    ];

    const result = mergeIntoOne(translations);
    return result;
  }
}

function mergeIntoOne(translations: Translation[]): Translation {
  return translations.reduce((acc, translation) => ({...acc, ...translation}), {} as Translation);
}
