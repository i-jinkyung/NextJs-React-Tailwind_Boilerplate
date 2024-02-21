import {atom} from 'recoil'
export const newAtom = atom<string>({
    key:'newAtom',
    default:''
})