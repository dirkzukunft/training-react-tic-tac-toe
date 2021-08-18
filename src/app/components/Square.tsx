import React from 'react';

type SquareProps = {
  value: string;
  onClick: () => void;
};

export default function Square({ value, onClick }: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}
