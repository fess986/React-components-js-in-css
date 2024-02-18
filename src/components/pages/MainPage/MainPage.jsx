import {MainWrapper} from './styles'
import About from "../../blocks/About/About";
import Features from "../../blocks/Features/Features";

export default function MainPage({features}) {
	return (
		<>
			<MainWrapper >
				<About />
				<Features features={features}/>
			</MainWrapper>
		</>
	);
}
