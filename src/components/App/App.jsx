import PageWrapper from "../layout/PageWrapper/PageWrapper";
// import "./styles.css";
import features from "../../mocks/features.js";
import products from "../../mocks/products.js";
import GlobalStyles from "./styles.js"; // подключаем глобальные стили к нижестоящему коду
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage.jsx";
import Order from "../pages/Order/Order.jsx";
import { AppRoutes } from '../../const/const.js'

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* так вот просто подключаем стили к странице <GlobalStyles />*/}
				<GlobalStyles />

        <Routes>
          {/* тут мы обозначаем корневой роутер и в качестве лэйаута ставим PageWrapper */}
          <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
            {/* index означает, то что будет искаться путь именно по родителю */}
            <Route index element={<MainPage features={features}/>} />  
            {/* Конструкция AppRoutes.ORDER.replace(AppRoutes.MAIN, '') убирает путь родителя '/' */}
            <Route path={AppRoutes.ORDER.replace(AppRoutes.MAIN, '')} element={<Order products={products}/>} />
            {/* все прочие пути будут вести в никуда */}
          <Route path="*" element={<h1>Такой страницы не существует</h1>}/>
          </Route>
          
        </Routes>
				
			</div>
		</BrowserRouter>
	);
}
