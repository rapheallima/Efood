import logo from '../../assets/images/logo.png';
import face from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import { Container, FootImg, Redes, TextFooter } from './styles';

export type Props = {
  background: 'white' | 'orange';
};

const Footer = ({ background }: Props) => (
  <Container>
    <FootImg background={background} src={logo} alt="Logo efood" />
    <Redes>
      <li>
        <img src={insta} alt="" />
      </li>
      <li>
        <img src={face} alt="" />
      </li>
      <li>
        <img src={twitter} alt="" />
      </li>
    </Redes>

    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </Container>
);

export default Footer;
