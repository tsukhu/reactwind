import React, { FC, HTMLAttributes, ReactChild } from 'react';
import tw, { styled } from 'twin.macro';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */

const StyledThing = styled.div(() => [
  tw`flex items-center justify-center w-5/6 m-auto text-2xl text-center text-pink-700 uppercase bg-yellow-400 shadow-xl rounded-3xl
`,
]);
export const Thing: FC<Props> = ({ children }) => {
  return (
    <StyledThing>
      {children || `the snozzberries taste like snozzberries`}
    </StyledThing>
  );
};
