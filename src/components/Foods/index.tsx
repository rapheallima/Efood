import estrela from '../../assets/images/star.png';

import {
  Card,
  Descript,
  EstrelaIcon,
  Info,
  Nota,
  NotaText,
  Tags,
  Title,
} from './styles';
import { TagContainer } from '../Tag/styles';
import Button from '../Button';

export type Props = {
  tags: string[];
  image: string;
  nota: string;
  name: string;
  description: string;
  btnText: string;
  btnType: 'button' | 'link';
  background: 'white' | 'orange';
};

const Foods = ({
  tags,
  image,
  nota,
  name,
  description,
  btnText,
  btnType,
  background,
}: Props) => (
  <Card background={background}>
    <img src={image} />

    <Tags>
      {tags.map((tag, index) => (
        <TagContainer
          key={index}
          size={tag === 'Destaque da semana' ? 'big' : 'small'}
        >
          {tag}
        </TagContainer>
      ))}
    </Tags>
    <Info>
      <Title background={background}>{name}</Title>
      {nota && (
        <Nota>
          <NotaText background={background}>{nota}</NotaText>
          <EstrelaIcon src={estrela} />
        </Nota>
      )}
    </Info>
    <Descript background={background}>{description}</Descript>
    <Button
      type={btnType}
      title="Clique aqui"
      size={btnText === 'Saiba mais' ? 'small' : 'big'}
      to="/perfil"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick={() => {}}
    >
      {btnText}
    </Button>
  </Card>
);

export default Foods;
