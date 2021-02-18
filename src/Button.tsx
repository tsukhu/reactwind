import tw, { css, styled, theme } from 'twin.macro';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  isPrimary?: Boolean;
  isSecondary?: Boolean;
  isSmall?: Boolean;
  isRounded?: Boolean;
}

export const Button = styled.button(
  ({ isPrimary, isSecondary, isSmall, isRounded }: ButtonProps) => [
    // The common button styles added with the tw import
    tw`px-8 py-2 text-lg rounded focus:outline-none`,
    tw`transition-transform duration-75 transform`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hover:(scale-105 text-brand dark:text-yellow-400)`,

    // Use props to conditionally style your components
    isPrimary &&
      tw`text-white bg-gray-300 border-black  dark:bg-gray-800 dark:border-gray-300`,

    // Combine regular css with tailwind classes within backticks
    isSecondary && [
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
      `,
      tw`border-2 border-yellow-600`,
      tw`bg-red-400`,
    ],

    // Conditional props can be added
    isSmall ? tw`text-sm` : tw`text-lg`,

    // Rounded Button
    isRounded && tw`rounded-full`,

    // The theme import can supply values from your tailwind.config.js
    css`
      color: ${theme`colors.white`};
    `,
  ]
);

export default Button;
