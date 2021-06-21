import React from "react";
import { Container, Heading, Paragraph, Image, Content } from './styles';

import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <Container>
      <Image source={IllustrationImg} />


      <Content>
        <Heading>Organize {`\n`} suas jogatinas {`\n`} facilmente</Heading>

        <Paragraph>
          Crie grupos para jogar com seus games {`\n`} com seus amigos
        </Paragraph>
      </Content>
    </Container>
  );
}