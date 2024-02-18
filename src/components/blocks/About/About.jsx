// import "./About.css";
import {StyledAbout, Text} from './styles'
import Title, { TITLE_SIZES } from "../../UI/Title/Title";

export default function About() {
	return (
		<StyledAbout>
			{/* <h1 className="title title_big">Магазин фермерских продуктов с доставкой</h1> */}
			<Title size={TITLE_SIZES.BIG } >
				Магазин фермерских продуктов с доставкой
			</Title>
			<Text>
				Все продукты изготавливаются под заказ. Фермеры начинают готовить
				продукты за день до отправки заказа клиентам. Именно поэтому мы
				принимаем заказы заранее и доставляем продукты максимально свежими.
			</Text>
		</StyledAbout>
	);
}
