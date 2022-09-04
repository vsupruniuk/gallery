import styled from 'styled-components/native';

const FullScreenView = styled.View`
  border: 15px solid transparent;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 99, 99, 0.1);
`;

const FullScreenImg = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export const Photo = ({ route }) => {
  const { imgUrl } = route.params;

  return (
    <FullScreenView>
      <FullScreenImg source={{ uri: imgUrl }} />
    </FullScreenView>
  );
}
