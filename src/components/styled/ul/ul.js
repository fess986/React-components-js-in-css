import styled, { css } from "styled-components";

// данное свойство стилизуется на основе примеси gridList. css -Примесь рассчитывается в зависимости от того, передано ли в списке $indent,  $align, $fontSize, $lineHeight
const gridList = css`
display : flex;
flex-wrap: wrap;
  margin-left: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`}; 
  margin-top: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `44px`};
  margin-bottom: 64px;
  font-size: 0;
  line-height: 0;
  text-align: ${(props) => props.$align || "center"};

  li {
    display: inline-block;
    margin-left: ${(props) =>
      props.$indent ? `${props.$indent}px` : props.theme.indent};
    margin-top: ${(props) =>
      props.$indent ? `${props.$indent}px` : props.theme.indent};
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
      props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
    vertical-align: top;
    overflow: hidden;
  }
`;

// если не передаётся свойство $isGridList, то список самый обычный, если же свойство есть, то подключаются так же дополнительные свойства для li внутри данного списка
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")};
`;


export default Ul;
