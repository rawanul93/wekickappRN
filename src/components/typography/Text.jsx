import styled from 'styled-components/native'


const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
`;

const subtitle = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.button};
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const bodyGrey = (theme) => `
    color: ${theme.colors.text.secondary};
`;

const bodyGreyLight = (theme) => `
    color: ${theme.colors.text.tertiary};
`;

const bodyBold = (theme) => `
    font-family: ${theme.fonts.bodyBold};
`;

const bodyBoldGrey = (theme) => `
    font-family: ${theme.fonts.bodyBold};
    color: ${theme.colors.text.secondary};
`;

const bodyBoldGreyLight = (theme) => `
    font-family: ${theme.fonts.bodyBold};
    color: ${theme.colors.text.tertiary};
`;

const caption = (theme) => `
    color: ${theme.colors.text.secondary};
`;

const tag = (theme) => `
    font-size: ${theme.fontSizes.tag};
    color: ${theme.colors.text.secondary};
`;



const highlighted = (theme) => `
    color: ${theme.colors.brand.primary};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.brand.primary};

`;


const variants = {
    title,
    subtitle,
    body,
    bodyGrey,
    bodyGreyLight,
    bodyBold,
    bodyBoldGrey,
    bodyBoldGreyLight,
    caption,
    highlighted,
    label,
    tag
}



export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};

