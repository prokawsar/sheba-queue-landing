import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  formSubmit: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('firstname');
    const email = data.get('email');
    const message = data.get('message');

    const result = await fetch('https://formspree.io/f/mgejonev', {
      method: 'post',
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (result.status == 200) {
      throw redirect(302, '/thank-you');
    } else {
      return {
        error: true,
      };
    }
  },
};
