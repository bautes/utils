import styled from 'styled-components';

export const ModalOverlay = styled.div`
  align-items: center;
  animation-name: fadeIn;
  background-color: ${({ theme }) => theme.colors.textQuote(0.9)};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 3px;
  height: auto;
  max-height: 100vh;
  max-width: 300px;
  overflow: hidden;
  overflow-y: auto;
  padding: 30px;
  position: relative;
  width: 100%;
  z-index: 10001;
`;

export const RightLink = styled(Link)`
  color: ${props => props.theme.colors.secondary()};
  text-decoration: underline;
  float: right;
  font-size: 0.875rem;
`;
