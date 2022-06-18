import React from "react";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { limit as limitAtom } from "../atom";

export default () => {
  const limitOption = [5, 10, 15, 20];

  const [limit, setLimit] = useRecoilState(limitAtom);
  return (
    <div className="limitSection">
      <h1>Set page limit :</h1>
      {limitOption.map((limitItem) => (
        <a
          className={`limit-item${limit === limitItem ? "bold" : ""}`}
          href="#"
          onClick={() => setLimit(limitItem)}
          key={limitItem}
        >
          {limitItem}
        </a>
      ))}
    </div>
  );
};
