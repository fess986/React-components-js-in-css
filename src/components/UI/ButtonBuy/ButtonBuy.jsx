// import './ButtonBuy.css'

// версия до стилизованных компонентов
// export default function ButtonBuy() {
//   return (
//     <button type="button" className="button">Купить билет</button>
//   )
// }

import React from "react";
import { StyledButton } from "./styles";

function ButtonBuy({
                  children, // дочерний элемент, отображаемый в кнопке
                  link, // ссылка
                  maxWidth, // делает кнопку на 100% родителя
                  className, // класс, который вроде не используем
                  onClick, // событие по клику
                  ...props // остальные переданные пропсы
                }) {
  return (
    <StyledButton
      {...props}  // передаём пропсы ниже
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })} // в случае если у нас ссылка, то в атрибуты кидаем to, если же ссылки нет, то это кнопка с обработчиком клика, типом и всё такое
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default ButtonBuy;