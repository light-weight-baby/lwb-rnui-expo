import {sleep} from 'doodoo/utils/help';
import {Auth$Login$Response} from 'doodoo/utils/types/api';

export class AuthApi {
  login = async (): Promise<Auth$Login$Response> => {
    // faking request
    await sleep(1000); // sleeping for 1s

    return {
      status: 'success',
      data: {
        'some-session-info?': {},
      },
    };
  };
}
