import {atom} from 'recoil';

// three-divided
// four-divided
export const layoutStateAtom = atom<string>({
    key:'layoutStateAtom',
    default:'two-divided'
});