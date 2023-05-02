import { StyledSection, StyledSectionHeader } from "./styled";
import React from "react";

interface SectionProps {
    title: string;
    extraContent?: React.ReactNode;
    body: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, extraContent, body }: SectionProps) => (
    <StyledSection>
        <StyledSectionHeader>
            <h2>{title}</h2>
            {extraContent}
        </StyledSectionHeader>
        {body}
    </StyledSection>
);

export default Section;
