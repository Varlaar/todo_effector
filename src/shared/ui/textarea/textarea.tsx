import React from "react";

export const Textarea = ({ className, ...rest }: any) => (
  <textarea className={className} {...rest} />
);