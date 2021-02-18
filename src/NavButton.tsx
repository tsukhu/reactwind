import * as React from 'react';
import tw, { styled } from 'twin.macro';

export interface NavButtonContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  isSelected: boolean;
}

export interface NavButtonTextProps extends React.HTMLAttributes<HTMLElement> {}

export const NavButtonText: React.FC<NavButtonTextProps> = styled.span(() => [
  tw`ml-2 text-sm font-medium transition-all ease-out duration-200 `,
]);

export const NavButtonContainer: React.FC<NavButtonContainerProps> = styled.button(
  ({ isSelected }: NavButtonContainerProps) => [
    isSelected ? tw`text-indigo-600` : tw`text-gray-700`,
    // The common button styles added with the tw import
    tw`py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline hover:text-indigo-600`,
  ]
);

export interface NavButtonProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  isSelected: boolean;
  icon?: React.ReactElement;
}

export const NavButton: React.FC<NavButtonProps> = ({
  text,
  isSelected,
  icon,
}) => {
    console.log(icon);
  return (
    <NavButtonContainer aria-selected={isSelected} isSelected={isSelected}>
      {icon}
      <NavButtonText>{text}</NavButtonText>
    </NavButtonContainer>
  );
};
