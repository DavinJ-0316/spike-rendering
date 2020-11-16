import React, { useState } from 'react';
import styled from '@emotion/styled';

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

const images = [{
  key: 'dd5e8ec0',
  src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ed13ff2-466e-43be-84b6-9ad8c2f8cce3/air-max-zm950-older-shoe-fhbCg2.jpg',
  alt: 'Nike',
}, {
  key: 'ed24262c',
  src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/609be217-d358-4b45-9b00-a21b1ceef6e6/air-max-zm950-older-shoe-fhbCg2.jpg',
  alt: 'Nike',
}, {
  key: '707fc4b5',
  src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4a41bc3b-06e2-4ebd-9613-f99c89651389/air-max-zm950-older-shoe-fhbCg2.jpg',
  alt: 'Nike',
}, {
  key: 'ee5d41d0',
  src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7be5337f-875a-47d4-b387-e41057c9d448/air-max-zm950-older-shoe-fhbCg2.jpg',
  alt: 'Nike',
}, {
  key: 'aa67a11e',
  src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/06725e1e-0098-4f33-9c0c-afa8649ebf71/air-max-zm950-older-shoe-fhbCg2.jpg',
  alt: 'Nike',
}]

const ProductPage = () => (
  <Page>
    <Product>
      <Image src={images[0].src} alt={images[0].alt} />
      <div>
        <Header>
          <Name>NIKE SHOES</Name>
          <Price>$123.00</Price>
        </Header>
        <Colors>
          <Color value="red" />
          <Color value="green" />
          <Color value="red" />
          <Color value="white" />
        </Colors>
        <Tagline>Ut aliquam aspernatur asperiores similique sit totam eos.</Tagline>
        <Description>
          Deleniti qui reprehenderit quo corporis aliquam sint culpa ipsum.
          Ut autem recusandae est voluptatem rem libero cumque perferendis praesentium.
          Est iure quisquam eos sed et dolorum consequatur accusamus.
          Laborum est qui facilis commodi occaecati doloribus.
          Voluptatibus quibusdam nihil corrupti voluptate placeat ea quo.
        </Description>
        <Thumbnails>
          {images.map((i) => (<Thumbnail key={i.key} src={i.src} alt={i.alt} />))}
        </Thumbnails>
        <CallToAction>ADD TO CART</CallToAction>
      </div>
    </Product>
  </Page>
);

export default ProductPage;
