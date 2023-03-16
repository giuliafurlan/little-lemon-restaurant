import styled from 'styled-components';
import theme from './theme';

const H1 = styled.h1`
  font-family: ${theme.fontFamily.markazi};
  font-size: 64px;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.color || theme.colors.highlight.dark};
`;

const H2 = styled.h2`
  font-family: ${theme.fontFamily.markazi};
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.color || theme.colors.highlight.dark};
`;

const LeadText = styled.h4`
  font-family: ${theme.fontFamily.karla};
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.color || theme.colors.highlight.dark};
`;

const CardTitle = styled.h3`
  font-family: ${theme.fontFamily.karla};
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.color || theme.colors.highlight.dark};
`;

const Paragraph = styled.p`
  font-family: ${theme.fontFamily.karla};
  font-size: 16px;
  font-size: 400;
  line-height: 1.5;
  margin: 0;
  max-width: 65ch;
  color: ${(props) => props.color || theme.colors.highlight.dark};
`;

const HighlightText = styled.p`
  font-family: ${theme.fontFamily.karla};
  font-size: 16px;
  font-size: 500;
  margin: 0;
  color: ${(props) => props.color || theme.colors.highlight.dark};
`;

export { H1, H2, LeadText, CardTitle, Paragraph, HighlightText };
