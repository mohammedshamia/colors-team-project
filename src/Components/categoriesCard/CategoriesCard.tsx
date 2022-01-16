import { Card, BoxCard, TypographyCard ,ProductImgCatogory} from "./style";


interface ICategoriesCard{

src:string,
title:string
url:string
} 
function CategoriesCard(props:ICategoriesCard) {
  return (
    <Card>
      <BoxCard>
        <ProductImgCatogory src={props.src} width={"290px"}/>
      </BoxCard>
      <TypographyCard to={props.url}>
        {props.title}
      </TypographyCard>
    </Card>
  );
}
export default CategoriesCard;