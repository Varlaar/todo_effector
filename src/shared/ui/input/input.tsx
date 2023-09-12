import React from "react";

export const Input = ({ className, ...rest }: any) => (
  <input type="text" className={className} {...rest} />
);
