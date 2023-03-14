import styled from 'styled-components';
import theme from './theme';

const H1 = styled.h1`
  font-family: ${theme.fontFamily.markazi};
  font-size: 64px;
`;

const H2 = styled.h2`
  font-family: ${theme.fontFamily.markazi};
  font-size: 40px;
`;

const LeadText = styled.h4`
  font-family: ${theme.fontFamily.karla};
  font-size: 18px;
  font-weight: 500;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fontFamily.karla};
  font-size: 18px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-family: ${theme.fontFamily.karla};
  font-size: 16px;
  font-size: 400;
  line-height: 1.5;
`;

const HighlightText = styled.p`
  font-family: ${theme.fontFamily.karla};
  font-size: 16px;
  font-size: 500;
`;

export { H1, H2, LeadText, CardTitle, Paragraph, HighlightText };
