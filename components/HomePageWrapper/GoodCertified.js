import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.breakpointsPixels.contentMax};
  margin: 0 auto;
  text-align: center;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

const CretifiedImg = styled.img`
  position: relative;
  z-index: 10;
`;

const TitleWrapper = styled.div`
  position: relative;
  background: url('/images/homepage/good-certified-bg-small.svg') center center
    no-repeat;
  background-size: 100% 100%;
  margin-top: -100px;
  margin-bottom: 24px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    background: none;
    margin-top: 0;
    margin-bottom: 0;
  }
  .hidden {
    opacity: 0;
    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpointsPixels.lg}) {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 22px;
  margin: 24px 0;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 36px;
    color: #000;
    padding: 0;
    position: static;
    display: block;
    height: unset;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0 12px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 32px;
  }
`;

const CardsWrapper = styled.div`
  padding: 0 16px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    padding: 0;
  }
`;

const CardContent = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 26px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 22px;
    line-height: 38px;
  }
`;
const GoodCertified = () => {
  return (
    <Wrapper>
      <CretifiedImg src="/images/homepage/certified.png" />
      <TitleWrapper>
        <Title>Good Certified candidates pledge to be:</Title>
        <img
          src="/images/homepage/good-certified-bg-small.svg"
          className="hidden full-image"
        />
      </TitleWrapper>
      <CardsWrapper>
        <Grid spacing={3} container>
          <Grid item xs={12} lg={4}>
            <Card>
              <Img
                src="images/icons/certification-badge.svg"
                alt="tgp certified"
                width={48}
                height={48}
              />
              <CardContent>
                <CardTitle>Independent</CardTitle>
                They hold diverse beliefs across the political spectrum, but
                agree Red and Blue are NOT the answer. They pledge not to pay
                dues or fundraise for Democrats or Republicans.
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card>
              <Img
                src="images/icons/certification-badge.svg"
                alt="tgp certified"
                width={48}
                height={48}
              />
              <CardContent>
                <CardTitle>People Powered</CardTitle>
                They only accept donations from individuals – not from
                corporations, unions, PACs, or other non-living entities.
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card>
              <Img
                src="images/icons/certification-badge.svg"
                alt="tgp certified"
                width={48}
                height={48}
              />
              <CardContent>
                <CardTitle>Anti-Corruption</CardTitle>
                They openly share their public meeting calendars and advance the
                Anti-Corruption Act
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardsWrapper>
    </Wrapper>
  );
};

GoodCertified.propTypes = {};

export default GoodCertified;
