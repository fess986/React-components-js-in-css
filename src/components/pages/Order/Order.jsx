import { useState } from "react";
import {
	OrderWrapper,
	StyledOrder,
	LeftColumn,
	AddressInput,
	PriceLabel,
	PriceValue,
	ProductSwiper,
	CheckboxLabel,
} from "./styles";
import CheckboxList from "../../UI/CheckboxList/CheckBoxList";
import Panel from "../../UI/panel/panel";
import { StyledTitle, TITLE_SIZES } from "../../UI/Title/Title";
import ButtonBuy from "../../UI/ButtonBuy/ButtonBuy";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper — компонент-обёртка слайдера, в него и будем вкладывать слайды
// SwiperSlide — компонент-обёртка для слайда, каждый слайд нужно оборачивать в этот компонент
// import "swiper/css"; // стили для слайдера основные
import "swiper/css/bundle"; // все стили для слайдера, включая навигацию, погинацию и тд

// import "swiper/css/mousewheel"; // стили для прокрутки

// import SwiperCore from "swiper"; // SwiperCore — это ядро слайдера. С его помощью к слайдеру можно подключать различные модули
import { Navigation, Pagination, Scrollbar, Mousewheel } from "swiper/modules"; //Navigation  для навигации
import ProductCart from "../../UI/ProductCart/ProductCart";

export default function Order({ products }) {
	const [selectProductIds, setSelectProductIds] = useState([]);
	const [swiperRef, setSwiperRef] = useState(null); // ссылка на слайдер
	const [address, setAddress] = useState("");

	const selectProducts = selectProductIds.map(
		(
			id // по списку выбранных айдишников находим выбранные продукты
		) => products.find((product) => product.id === id)
	);

	//считаем сумму покупки пробегаясь по массиву selectProducts
	const fullPrice = selectProducts.reduce(
		(sum, product) => (sum += product.price),
		0
	);

	const handleByeClick = () => {
		// eslint-disable-next-line no-alert
		alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
			(product) => `${product.name} - ${product.price} руб.\n`
		)}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
	};

	const handleOnClickProduct = (value, index) => {
		if (!selectProductIds.includes(value)) {
			swiperRef.slideTo(index, 200); // метод DOM-элемента слайдера, который перекручивает к слайду с индексом index в течении времени 200 мс
		}
	};

	return products && products.length ? ( // если нет списка продуктов, то отображаем заглушку
		<OrderWrapper>
			<StyledOrder as="form">
				<LeftColumn>
					<Panel $marginBottom={20} $paddingTop={24} $paddingBottom={10}>
						<StyledTitle
							as="h2"
							size={TITLE_SIZES.EXTRA_SMALL}
							$marginBottom={12}
						>
							Выберите продукты
						</StyledTitle>
						<CheckboxList
							labelComponent={CheckboxLabel}
							name={"select-products"}
							isGridList={false}
							options={products.map((product) => ({
								value: product.id,
								title: product.name,
							}))}
							selectValues={selectProductIds}
							onChange={setSelectProductIds}
							onClickLabel={handleOnClickProduct}
						/>
					</Panel>
					<Panel>
						<StyledTitle size={TITLE_SIZES.EXTRA_SMALL} $marginBottom={24}>
							Сделать заказ
						</StyledTitle>
						<AddressInput
							value={address}
							onChange={(evt) => setAddress(evt.target.value)}
							placeholder="Введите адрес доставки"
						/>
						<PriceLabel as="span">Сумма покупки</PriceLabel>
						<PriceValue value={fullPrice} />
						<ButtonBuy
							onClick={handleByeClick}
							disabled={!(selectProductIds.length && address)}
							maxWidth
						>
							Купить
						</ButtonBuy>
					</Panel>
				</LeftColumn>
				{/* <div>Сюда нужно добавить слайдер с продуктами</div> */}

				<ProductSwiper
					onSwiper={(swiper) => {
						// в параметр функции падает объект слайдера, который мы и установим сразу в качестве swiperRef, чтобы далее мы могли пользоваться методами этого слайдера
						setSwiperRef(swiper);
					}}
					modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
					spaceBetween={12}
					// direction="vertical"
					slidesPerView={2}
					scrollbar={{ draggable: true }}
					mousewheel
					pagination={{
						type: "fraction",
					}}
				>
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductCart product={product} />
						</SwiperSlide>
					))}
				</ProductSwiper>
			</StyledOrder>
		</OrderWrapper>
	) : (
		"Продукты были слишком вкусные и их разобрали."
	);
}
