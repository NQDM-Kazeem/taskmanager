import React from 'react';

export interface ITaskFooter {
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}
