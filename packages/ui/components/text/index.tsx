/** @jsx jsx */
import React from "react";

import { jsx } from "theme-ui";

export function Text(props: { children: any }) {
  const { children } = props;

  return (
    <p
      // @ts-ignore
      sx={{
        backgroundColor: "black",
        color: "white",
        p: "25px",
      }}
    >
      {children}
    </p>
  );
}
