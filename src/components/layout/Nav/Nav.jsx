import ButtonBuy from "../../UI/ButtonBuy/ButtonBuy";
import { AppRoutes } from "../../../const/const";

export default function Nav() {
  return (
    <nav><ButtonBuy link={AppRoutes.ORDER}> Купить </ButtonBuy></nav>
  )
}