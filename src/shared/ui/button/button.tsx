import React from 'react';

export const Button = ({ className, name, ...rest }: any) => (
    <button className={className} {...rest}>{name}</button>
  );
  


