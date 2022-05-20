import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.section`
  padding: 80px 0;
  @media only screen and (min-width: ${({ theme }) =>
  theme.breakpointsPixels.lg}) {
    padding: 130px 0;
  }
`;

const H2 = styled.h2`
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 48px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 64px;
    margin: 0 0 72px;
  }
`;

const Icons = styled.div`
  font-size: 50px;
  margin-bottom: 50px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 64px;
  }
`;

const Content = styled.div`
  font-size: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 16px;
`;

const Anatomy = () => {
  return (
    <Wrapper>
      <H2>Anatomy of a #goodparty</H2>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={4}>
          <Content>
            <Icons>💃🏽 🕺 🎸</Icons>
            <Title>THE PURPOSE IS TO HAVE FUN</Title>
            <div>
              A #goodparty is whatever you want it to be: a sewing circle, a
              dinner party or a full-on rager!
            </div>
          </Content>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Content>
            <Icons>🏠 🍕 🍻</Icons>
            <Title>WITH FRIENDS AND FAMILY</Title>
            <div>
              Come together, share food and music, make memories - be together
              and enjoy life!
            </div>
          </Content>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Content>
            <Icons>🗓️ 🎉 🤳</Icons>
            <Title>EVERY TUESDAY</Title>
            <div>
              Do it so you can do it again. Pitch in, clean up, and help host,
              so #goodparty Tuesdays can become a thing!
            </div>
          </Content>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Anatomy;
