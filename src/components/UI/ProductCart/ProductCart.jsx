import Panel from "../panel/panel";
import { ProductImage, ContentWrapper, ProductTitle, Price } from "./styles";
import {TITLE_SIZES} from '../Title/Title'
import Tabs from "../../blocks/Tabs/Tabs";
import OptionsList from "../OptionsList/OptionsList";

function ProductCart({ product }) {

  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content:  <OptionsList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />,
    }
  ];

  return (
    <Panel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TITLE_SIZES.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCart;