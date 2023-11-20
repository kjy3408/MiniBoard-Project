import { atom } from 'recoil';

export const authenticatedState = atom({
    key: "authenticatedState",
    default: false
});

export const checkAdminState = atom({
    key: "adminCheck",
    default: false
})

