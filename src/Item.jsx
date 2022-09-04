import styled from 'styled-components/native';

const ItemView = styled.View`
  flex-direction: row;
  padding: 25px 40px;
  border: 0 solid rgba(21, 21, 21, 0.33);
  border-bottom-width: 1px;
  background-color: rgba(100, 99, 99, 0.1);
`;

const ItemImage = styled.Image`
  margin-right: 40px;
  width: 150px;
  height: 150px;
  border: 2px solid rgba(0, 0, 0, 0.61);
  border-radius: 10px;
`;

const ItemDetails = styled.View`
  justify-content: center;
  align-items: center;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 5px;
`;

const ItemAuthor = styled.Text`
  font-size: 14px;
  color: rgba(46, 46, 46, 0.67);
`;

export const Item = ({ title, author, imgUrl }) => (
  <ItemView>
    <ItemImage source={{ uri: imgUrl }} />
    <ItemDetails>
      <ItemTitle>{title}</ItemTitle>
      <ItemAuthor>{author}</ItemAuthor>
    </ItemDetails>
  </ItemView>
);
