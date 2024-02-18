import styled, { css } from "styled-components";
import TextInput from "../../UI/TextInput/TextInput";
import Section from "../../styled/section/section";
import { Swiper, SwiperSlide } from "swiper/react";
import checkboxSelect from "../../../accets/checkbox.svg";
import Price from "../../UI/Price/price";

export const OrderWrapper = styled.main`
width: ${props => props.theme.pageWidth};
margin: 0 auto;
padding-bottom: 80px;
`

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;

export const StyledOrder = styled(Section)`
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const LeftColumn = styled.div`
  width: 353px;
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;