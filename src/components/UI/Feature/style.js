import styled, {css} from "styled-components";
import {P as FeatureText} from '../../styled'
import {Img, Section} from '../../styled'

export const FeatureTextAbout = styled(FeatureText)`
text-align: left;
`
// сначала делали как с обычным тегом img, а потом с компонентом
// export const FeatureImage = styled.img.attrs(props => ({
//   width: '56px',
//   height: "59px",
//   src: props.src, // это не обязательно пропихивать, так как элемент и сам знает про этот параметр
// }))`
//   float: left;
//   width: 56px;
//   height: 56px;
//   margin-right: 20px;
// `

// дописываем аттрибуты для заранее созданного компонента
export const FeatureImage = styled(Img).attrs(props => ({
  // children: 'ass', можно прямо тут передавать чилдренов, но не в таких тегах как img, так как они не предусмотрены
  width: props.theme.featureImageSize, // передаём аттрибут из темы
  height: `${props.$height || '56px'}`, // передаём из кастомного свойства $height или же по умолчанию - будет работать и без $
  src: props.src, // это не обязательно пропихивать, так как элемент и сам знает про этот параметр. Например alt прилетает сам
}))`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 20px;
`

export const FeatureHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`

export const FeatureOwner = styled.span`
display: inline-block;
min-height: 25px;
margin-bottom: 4px;
padding-left: 10px;
padding-right: 10px;
font-size: 14px;
line-height: 25px;
color: ${props => props.theme.colorWhite};
background-color: ${props => props.$isNegative ? '#f75531' : '#88aa4d'};
`

const featureBackgroundColor = css`
background-color: ${props=> props.$isNegative ? '#f8ddd7' : '#e1edce'}
`

export const FeatureSection = styled(Section)`
${featureBackgroundColor};
width: 540px;
min-height: 250px;
padding: 20px;
box-sizing: border-box;
display: block;
`
