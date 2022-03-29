import React from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import { H2 } from '../shared/typogrophy';
import { TESTIMONIALS } from '../../utils/constants';
const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpointsPixels.contentMax};
  margin: 0 auto;
  padding: 48px 0 0;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    padding: 48px 0;
  }
`;

const Padder = styled.div`
  padding: 24px 20px;
  position: relative;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    padding: 40px 80px 140px;
    background-color: ${({ theme }) => theme.colors.grayF};
  }
`;

const StyledH2 = styled(H2)`
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 42px;
    line-height: 58px;
  }

  .large {
    margin-top: 40px;
    display: block;
    font-size: 80px;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const Heart = styled.img`
  width: 120px;
  height: auto;
  margin-top: 40px;
  z-index: 10;
  position: relative;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    width: 200px;
    height: auto;
  }
`;

const GrayBg = styled.div`
  position: relative;
  margin-top: -160px;
`;

const GrayText = styled.div`
  position: absolute;
  top: 40%;
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  z-index: 10;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 36px;
    left: 80px;
    top: 50%;
    text-align: left;
    width: unset;
  }
`;

const TestWrapper = styled.div`
  position: relative;
  margin-top: -70px;
  padding: 0 16px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    padding: 0 80px;
    margin-top: -100px;
  }
`;

const Test = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    align-items: center;
  }

  img {
    width: 110px;
    border-radius: 50%;
    box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.15);
    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpointsPixels.lg}) {
      width: 160px;
    }
  }
`;

const TestContent = styled.div`
  margin-left: 24px;
  font-size: 16px;
  line-height: 22px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    margin-left: 36px;
    font-size: 26px;
    line-height: 32px;
  }
`;

const Name = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
  margin-top: 8px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 25px;
  }
`;

const Position = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray7};
  font-weight: 500;
  letter-spacing: 1px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpointsPixels.lg}) {
    font-size: 18px;
  }
`;


const Testimonials = () => {
  return (
    <Wrapper>
      <Padder className="text-center">
        <StyledH2 data-cy="testimonial-section-title">
          Together we can change things for<span className="large">GOOD</span>
        </StyledH2>
        <Heart data-cy="testimonial-heart" src="/images/heart.svg" alt="tgp logo" />
      </Padder>
      <GrayBg>
        <Hidden mdDown>
          <img
            src="/images/homepage/testimonial-bg.svg"
            className="full-image hidden"
            alt="bg"
            data-cy="testimonial-bg" 
          />
        </Hidden>
        <Hidden lgUp>
          <img
            src="/images/homepage/testimonial-bg-small.svg"
            className="full-image hidden"
            style={{ marginTop: '40px' }}
            alt="bg-small"
            data-cy="testimonial-bg-small" 
          />
        </Hidden>
        <GrayText data-cy="testimonial-subtitle">Who’s into it?</GrayText>
      </GrayBg>
      <TestWrapper>
        {TESTIMONIALS.map((test, index) => (
          <Test
            key={test.name}
            style={index === TESTIMONIALS.length - 1 ? { marginBottom: 0 } : {}}
            data-cy="testimonial-item"
          >
            <img src={test.img} data-cy="testimonial-avatar" />
            <TestContent data-cy="testimonial-content">
              &quot;{test.text}&quot;<Name data-cy="testimonial-name">{test.name}</Name>
              <Position data-cy="testimonial-position">{test.position}</Position>
            </TestContent>
          </Test>
        ))}
      </TestWrapper>
    </Wrapper>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
