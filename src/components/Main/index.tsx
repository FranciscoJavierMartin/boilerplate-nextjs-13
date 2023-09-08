import * as S from './styles';

type MainProps = {
  title: string;
  description: string;
};

export default function Main({
  title = 'Won Games',
  description = 'Purchase online games',
}: MainProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src="/img/hero-illustration.svg" />
    </S.Wrapper>
  );
}
