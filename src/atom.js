import { atom, useRecoilState, useRecoilValue } from "recoil";

export const posts = atom({
  key: "posts",
  default: [],
});

export const limit = atom({
  key: "limit",
  default: 10,
});
