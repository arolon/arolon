import { writable } from 'svelte/store';

export const modalOpened = writable(false);

// export const customBackground = writable('#0a0908');
export const customBackground = writable('transparent');
