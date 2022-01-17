import React from 'react';
import { Button } from './ButtonStyle';
import { IStyleButton } from './IStyleButton';

export default function ButtonComponent(props: IStyleButton) {
  return <Button {...props} />;
}
