import { ReactNode } from "react";
import { StyledSection, StyledSectionHeader } from "./styled";

interface SectionProps {
  title: string;
  body: ReactNode;
  extraContent?: ReactNode;
}

const Section = ({ title, body, extraContent }: SectionProps) => (
  <StyledSection>
    <StyledSectionHeader>
      <h2>{title}</h2>
      {extraContent}
    </StyledSectionHeader>
    {body}
  </StyledSection>
);

export default Section;
