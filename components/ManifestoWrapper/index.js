/**
 *
 * ManifestoWrapper
 *
 */

import React from 'react';
import PageWrapper from '../shared/PageWrapper';
import { FontH1, FontH2 } from '../shared/typogrophy';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SoFIt from '../HomePageWrapper/SoFIt';

const Wrapper = styled.div`
  margin-top: 60px;
  font-size: 24px;
  line-height: 36px;
`;

const H2 = styled.h2`
  margin-top: 0;
  color: #666;
  font-style: italic;
  font-weight: 900;
`;

function ManifestoWrapper() {
  return (
    <PageWrapper>
      <Wrapper>
        <FontH1 style={{ marginBottom: '16px' }}>
          The #goodparty Manifesto
        </FontH1>
        <H2>
          for the love of us over <u>It</u>!
        </H2>
        <br />
        <br />
        <strong>
          What is{' '}
          <u>
            <i>It</i>
          </u>
          ?
        </strong>
        <ul>
          <li>
            <i>It</i> is the system that tears away our hopes.
          </li>
          <li>
            <i>It</i> is the political duopoly that fights to keep us divided.
          </li>
          <li>
            <i>It</i> is the rat race that consumes our lives.
          </li>
          <li>
            <i>It</i> is the chemicals that poison our bodies.
          </li>
          <li>
            <i>It</i> is the consumerism that infests our minds.
          </li>
          <li>
            <i>It</i> is the manufactured doom loop that darkens our souls.
          </li>
          <li>
            <i>It</i> is{' '}
            <a
              href="https://mindlevelup.wordpress.com/2016/10/23/canaanite-gods-explained/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="underline"
            >
              Moloch
            </a>
            , the dark force of downward spirals.
          </li>
          <li>
            <i>It</i> is what wants us divided and hopeless.
          </li>
        </ul>

        <br />
        <br />
        <strong>
          Don’t let{' '}
          <u>
            <i>It</i>
          </u>{' '}
          define us!
        </strong>
        <ul>
          <li>
            <i>It</i> doesn’t live.
          </li>
          <li>
            <i>It</i> doesn’t love.
          </li>
          <li>
            <i>It</i> has no friends.
          </li>
          <li>
            <i>It</i> has no family.
          </li>
          <li>
            <i>It</i> has no dreams.
          </li>
          <li>
            <i>It</i> has no consciousness.
          </li>
        </ul>

        <br />
        <br />
        <strong>
          Let&apos;s do it... to{' '}
          <u>
            <i>It</i>
          </u>
          ! (with a #goodparty)
        </strong>
        <ul>
          <li>We party to have fun and create hope. </li>
          <li>We party to get together with our friends.</li>
          <li>We party to enjoy our lives.</li>
          <li>We party to inspire our minds.</li>
          <li>We party to brighten our souls.</li>
          <li>We party to lift each other up.</li>
          <li>We party to enjoy being together again!</li>
          <li>We party to be human.</li>
        </ul>
        <br />
        <br />
        <p>
          Humans need community. A #goodparty is the simplest form of community.
          When we get together for a #goodparty, we’re exercising our freedom of
          assembly in the most basic, fun and human way possible. A #goodparty
          is our fundamental right to life, liberty and the pursuit of
          happiness. At a #goodparty, we eat, we drink, we dance. We laugh, we
          love, we talk. We share our ideas, our values and our culture. We
          create a space for all to feel good, welcome and empowered. At a
          #goodparty together, we find that we are all we really need. And, we
          find that we have more in common than{' '}
          <u>
            <i>It</i>
          </u>{' '}
          wants us to believe.
          <br />
          <br />
          And, in a democracy when enough people come together - all at once and
          everywhere - we gain real power. With that power, we gain the energy
          to inspire each other. We create hope. We realize that if we can party
          together, then we can unite together to do much more. Before you know
          it, we’ll have enough support to vote{' '}
          <u>
            <i>It</i>
          </u>{' '}
          out, and the good among us, in!
          <br />
          <br />
          It’s that simple, and it’s that fun! So let’s get this party started!
        </p>
        <SoFIt noTitle />
      </Wrapper>
    </PageWrapper>
  );
}

ManifestoWrapper.propTypes = {};

export default ManifestoWrapper;
