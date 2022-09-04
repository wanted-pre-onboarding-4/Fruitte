import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

const Button = styled.button`
  width: ${props => (props.width ? `${props.width}` : `100%`)};
  height: 50px;
  background-color: ${props =>
    props.theme === 'main' ? `${Colors.ORANGE};` : `${Colors.GRAY_3};`};
  color: ${Colors.WHITE};
  font-size: ${props => (props.fontSize ? `${props.fontSize}` : `17px`)};

  :hover {
    transition: all 0.15s ease-in-out;
    background-color: ${props =>
      props.theme === 'main' ? `${Colors.ORANGE_2}` : ` ${Colors.GRAY_2};`};
  }
  :disabled {
    cursor: default;
  }
`;

export default function Button01(props) {
  return (
    <Button
      theme={props.theme}
      width={props.width}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.name}
    </Button>
  );
}
