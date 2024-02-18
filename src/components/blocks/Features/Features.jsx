import ButtonBuy from "../../UI/ButtonBuy/ButtonBuy";
import Title from "../../UI/Title/Title";
import FeaturesList from "../FeaturesLIst/FeaturesList";
import SectionFeatures from "./styles";
import { AppRoutes } from "../../../const/const";


export default function Features({ features }) {
	return (
		<SectionFeatures >
			<Title level={"h2"}>Почему фермерские продукты лучше?</Title>
			<FeaturesList features={features} />
			<ButtonBuy link={AppRoutes.ORDER}>Купить</ButtonBuy>
		</SectionFeatures>
	);
}
