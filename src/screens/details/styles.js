import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: #383a59;
`;

export const HeaderPage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #f9d368;
  font-weight: 500;
  text-align: center;
`;

export const MovieImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const MovieImage = styled.Image`
  width: 160px;
  height: 200px;
  background: white;
  border-radius: 10px;
`;

export const MovieInfoTitle = styled.View`
  align-items: center;
  margin-top: 15px;
`;

export const MovieInfos = styled.View`
  background: #fef6f6;
  margin-top: 10px;
  border-radius: 4px;
  padding: 10px;
`;

export const MovieText = styled.Text`
  font-size: 14px;
  color: #020200;
  margin-top: 8px;
`;
