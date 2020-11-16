import styled from '@emotion/styled';
import React from 'react';
import accounting from 'accounting';

const Page = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #dadada;
  padding: 100px 0;
`;

const Product =  styled.div`
  background: white;
  padding: 32px;
  border: 2px solid #dadada;
  width: 900px;
  border-radius: 8px;
  margin: auto;
  display: flex;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 300px;
  margin-right: 64px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
`;

const Price = styled.div`
`;

const Colors = styled.div`
  display: flex;
`;

const Color = styled.div`
  margin-bottom: 1rem;
  height: 32px;
  width: 32px;
  border: 1px solid #dadada;
  background-color: ${(props) => props.value};
  margin-right: 0.5rem;
`;

const Tagline = styled.div`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const Description = styled.div`
  line-height: 1.55;
  margin-bottom: 1rem;
`;

const Thumbnails = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

const Thumbnail = styled.img`
  width: 80px;

  & ~ & {
    margin-left: 0.5rem;
  }
`;

const CallToAction = styled.button`
  display: block;
  padding: 12px 24px;
  border: 0;
  background: black;
  color: white;
  font-size: 1rem;
`;

const ProductPage = ({
  name,
  price,
  tagline,
  description,
  images,
  colors,
}) => (
  <Page>
    <Product>
      <Image src={images[0].src} alt={images[0].alt} />
      <div>
        <Header>
          <Name>{name}</Name>
          <Price>{accounting.formatMoney(price)}</Price>
        </Header>
        <Colors>
          {colors.map((c) => (<Color key={c} value={c} />))}
        </Colors>
        <Tagline>{tagline}</Tagline>
        <Description>{description}</Description>
        <Thumbnails>
          {images.map((i) => (<Thumbnail key={i.key} src={i.src} alt={i.alt} />))}
        </Thumbnails>
        <CallToAction>ADD TO CART</CallToAction>
      </div>
    </Product>
  </Page>
);

export default ProductPage;
