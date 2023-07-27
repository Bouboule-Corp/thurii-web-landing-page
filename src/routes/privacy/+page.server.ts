
import { redirect } from '@sveltejs/kit';

const REDIRECT_URL: string = 'https://www.iubenda.com/privacy-policy/73601267';

export function load() {
	throw redirect(302, REDIRECT_URL);
}