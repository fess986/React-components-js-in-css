import React from "react";
// import { Label, VisuallyHiddenInput } from "/src/components/styled";
import {Label, VisuallyHiddenInput} from '../../styled';

// чекбокс
function Checkbox({
  labelComponent, // Компонент для отображения label - по сути это стилизованный span, который по переданному свойству isChecked меняет свои стили, добавляя картинку галочки
  isChecked, // выбранно ли значение
  name, // имя, которое должно быть общим для чекбоксов, для того чтобы получилась связь между ними
  value, // значение, которое соответствует айдишнику товара, служит для определения чекбокса, для дальнейшей передачи форме
  text, // текст подписи элемента - спана LabelComponent
  onClick, // событие по клику лейбела
  onChange, // событие при изменении чекбокса
  ...props  // не используется
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}  // поднимаем наверх значение value , которое соответствует значению данного чекбокса, и далее с ним работаем
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
