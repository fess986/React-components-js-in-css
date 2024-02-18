import Title, { TITLE_SIZES } from "../Title/Title";
import {
	FeatureTextAbout,
	FeatureImage,
	FeatureHeader,
	FeatureOwner,
	FeatureSection,
} from "./style";

export default function Feature({ title, owner, isNegative, image, about }) {
	return (
		<FeatureSection $isNegative={isNegative}>
			
			<FeatureHeader>
				{/* <img
					className="feature__img"
					width="56"
					height="56"
					src={image}
					alt={title}
				/> */}
				<FeatureImage src={image} alt={title} />
				<div>
					<FeatureOwner $isNegative={isNegative}>{owner}</FeatureOwner>
					<Title level={"h3"} size={TITLE_SIZES.EXTRA_SMALL}>
						{title}
					</Title>
				</div>
			</FeatureHeader>
			<FeatureTextAbout>{about}</FeatureTextAbout>
		</FeatureSection>
	);
}
