import "./FeaturesList.css";
import Feature from "../../UI/Feature/Feature";
import { FeatureList } from "./styles";

// выводим компонент только в случае если есть входящий массив данных и он не пустой
export default function FeaturesList({ features }) {
	return features && features.length ? (
		<>
			<FeatureList $isGridList={true}>
				{features.map((feature) => (
					<li key={feature.id}>
						<Feature {...feature} />
					</li>
				))}
			</FeatureList>
		</>
	) : null;
}
