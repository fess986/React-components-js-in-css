// export const TITLE_SIZES = {
// 	BIG : 'big',
// 	MEDIUM : 'medium',
// 	SMALL : 'small',
// 	EXTRA_SMALL: 'extra_small',
// }


import styled, { css } from "styled-components"; // нахрена нужен этот css - вообще не понятно, всё и без него отлично работает

export const TITLE_SIZES = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small"
};

const TitleSizeValue = {
  [TITLE_SIZES.BIG]: {
    fontSize: "44px",
    lineHeight: "50px"
  },
  [TITLE_SIZES.MEDIUM]: {
    fontSize: "36px",
    lineHeight: "41px"
  },
  [TITLE_SIZES.SMALL]: {
    fontSize: "24px",
    lineHeight: "31px"
  },
  [TITLE_SIZES.EXTRA_SMALL]: {
    fontSize: "18px",
    lineHeight: "27px"
  }
};

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
  font-weight: bold;
  ${(props) => {
    const values = TitleSizeValue[props.size || TITLE_SIZES.MEDIUM];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }};
`;

// теперь мы можем сами передавать уровень заголовка в титульник, а так же размер и всё прочее
export default function Title( {children, size = TITLE_SIZES.BIG, level = 'h1', className} ) {
	return (
			<StyledTitle size={size} as={level} className={className} >{children}</StyledTitle>
	);
}
