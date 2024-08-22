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
  tags: boolean[];
  tipo: string;
  image: string;
  nota: string;
  name: string;
  description: string;
  btnText: string;
  id: string;
  btnType: 'button' | 'link';
  background: 'white' | 'orange';
  onClick?: () => void;
};

const Foods = ({
  tags,
  tipo,
  image,
  nota,
  name,
  description,
  btnText,
  btnType,
  background,
  onClick,
  id,
}: Props) => {
  const getDescricao = (
    description: string,
    background: 'white' | 'orange',
  ) => {
    if (background === 'white') {
      return description.length > 95
        ? description.slice(0, 220) + '...'
        : description;
    }
    return description.length > 95
      ? description.slice(0, 145) + '...'
      : description;
  };
  return (
    <Card $background={background}>
      <img src={image} alt={name} />

      <Tags>
        {tags.map((tag, index) => {
          if (typeof tag === 'boolean') {
            return tag ? (
              <>
                <TagContainer key={`destaque-${index}`} size="big">
                  Destaque da semana
                </TagContainer>
                <TagContainer key={`tipo-${index}`} size="small">
                  {tipo}
                </TagContainer>
              </>
            ) : (
              <TagContainer key={index} size="small">
                {tipo}
              </TagContainer>
            );
          }
        })}
      </Tags>
      <Info $background={background}>
        <Title $background={background}>{name}</Title>
        {nota && (
          <Nota $background={background}>
            <NotaText $background={background}>{nota}</NotaText>
            <EstrelaIcon src={estrela} />
          </Nota>
        )}
      </Info>
      <Descript $background={background}>
        {getDescricao(description, background)}
      </Descript>
      <Button
        type={btnType}
        title="Clique aqui"
        size={btnText === 'Saiba mais' ? 'small' : 'big'}
        to={`/perfil/${id}`}
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Card>
  );
};

export default Foods;
