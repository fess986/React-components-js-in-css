import React from "react";
import Checkbox from "../Checkbox/CheckBox";
// import { Ul, Li } from "/src/components/styled";
import { Ul, Li } from "../../styled";

// Чекбокс
function CheckboxList({
  selectValues, // массив выбранных значений, используется в этом компоненте
  labelComponent, // Компонент для отображения label - по сути это стилизованный span, который по переданному свойству isChecked меняет свои стили, добавляя картинку галочки. Спускается в чекбокс
  options, // массив с объектами для выбора {title: заголовок, value: значение} - который мы получаем на основе объекта products
  name, // имя, которое должно быть общим для чекбоксов, для того чтобы получилась связь между ними
  onChange, // событие при изменении - обновляет массив выбранных элементов через setSelectProductIds
  isGridList, // выбор отображения Ul - как по мне лишняя штука
  onClickLabel,  // событие происходящее по клику на лейбл, передаётся id продукта 2 раза зачем то
}) {
  const handleChange = (value1) => {  // логика добавления/удаления элементов из массива
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value1);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value1);
    }
    onChange && onChange(newValue);  // если передана onChange, запускаем перезапись массива выбранных значений
  };

  return (
    <Ul $isGridList={isGridList}>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)} // поднятое снизу действие над компонентом LabelComponent, которое является span-ом
            onChange={handleChange}  // пользуемся поднятым из Checkbox значением value
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
