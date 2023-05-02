import React from "react";

import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledLink } from "./styled";
import { StyledWrapper } from "../styledWrapper";

const AuthorPage: React.FC = () => (
  <>
    <Header header={"O autorze"} />
    <Section
      title={"Piotr Paczuski"}
      body={
        <>
          <StyledWrapper>
            <p>
              Mam na imię <b>Piotrek</b> oraz pochodzę, jak i mieszkam w
              niewielkiej miejscowości, która nosi nazwe <b>Sokołów Podlaski</b>
              . Jest ona położona 100km na wschód od Warszawy. W przyszłości
              planuje zamieszkać w Warszawie, bądź pod Warszawą.
            </p>
            <p>
              Zapisałem się na kurs{" "}
              <StyledLink
                href="https://youcode.pl/zostawiam-maila/"
                target={"_blank"}
              >
                YouCode,
              </StyledLink>
              , aby nauczyć się FrontEndu. Programowaniem interesuje się od
              dłuższego czasu, próbowałem już uczyć się innych języków:{" "}
              <b>Java</b> oraz <b>Python</b>, ale niestety na ten moment nie
              podchodziły mi te języki. W przyszłości nie wykluczam przejścia na
              stanowisko Full Stack Developer.
            </p>
            <p>
              Na pierwszym miejscu na mojej liście zainteresowań jest FrontEnd,
              ale również się interesuje e-sportem, samochodami oraz nowymi
              technologiami.
            </p>
          </StyledWrapper>
        </>
      }
    />
  </>
);

export default AuthorPage;
