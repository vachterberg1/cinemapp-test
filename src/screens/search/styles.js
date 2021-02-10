// import styled from 'styled-components';

// export const Container = styled.View`
//   padding: 16px;
//   background: #2f1a28;
//   height: 100%;
// `;

// export const ContainerInput = styled.View`
//   margin-top: 25px;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const InputSearch = styled.TextInput.attrs({
//   placeholder: 'Procure filmes pelo título',
// })`
//   background: #fff;
//   height: 50px;
//   width: 70%;
//   border-radius: 5px;
//   padding: 10px;
// `;

// export const ButtonSearch = styled.TouchableOpacity`
//   height: 50px;
//   width: 90px;
//   background: #a9a9a9;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
// `;

// export const ResultsContainer = styled.View`
//   flex: 1;
//   margin-top: 25px;
// `;

// export const ResultsView = styled.TouchableOpacity`
//   background-color: #eeff;
//   margin-top: 10px;
//   padding: 10px;
//   flex-direction: row;
//   align-items: center;
//   border-radius: 4px;
// `;

// export const DescriptionBox = styled.View`
//   margin: 0 15px;
//   justify-content: center;
//   flex: 1;
// `;

// export const Title = styled.Text`
//   font-size: 16px;
//   font-weight: 500;
// `;

// export const Poster = styled.Image`
//   background: #666;
//   width: 60px;
//   height: 80px;
//   border-radius: 4px;
// `;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: #383a59;
`;

export const SearchContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Procure filmes por título...',
})`
  background: #e6e7eb;
  flex: 1;
  height: 45px;
  border-radius: 4px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #f9d368;
  height: 45px;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 4px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ResultsContainer = styled.View`
  flex: 1;
`;

export const ItemView = styled.TouchableOpacity`
  background-color: #eeff;
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const Poster = styled.Image`
  background: #666;
  width: 60px;
  height: 80px;
  border-radius: 4px;
`;

export const DescriptionBox = styled.View`
  margin: 0 10px;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
`;
