import { FundoHero, Header, TextHero } from './styles';
import logo from '../../assets/images/logo.png';

type Props = {
  background: 'white' | 'orange';
};

const Hero = ({ background }: Props) => {
  const isHome = background === 'white';

  return (
    <>
      <Header background={background}>
        <FundoHero background={background}>
          <img src={logo} alt="efood" />
          {isHome && (
            <TextHero>
              Viva experiências gastronômicas no conforto da sua casa
            </TextHero>
          )}
        </FundoHero>
      </Header>
    </>
  );
};

export default Hero;
