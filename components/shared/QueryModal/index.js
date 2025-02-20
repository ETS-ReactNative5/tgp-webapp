/**
 *
 * QueryModal
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/HighlightOff';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { Body13, H2 } from '/components/shared/typogrophy';
import BlackButton from '../buttons/BlackButton';

const TgpDialog = styled(Dialog)`
  && {
    .MuiDialog-paper {
      position: relative;
      width: 100vw;
      background-color: #fff;
      padding: 8px;
      border-radius: 4px;
      box-shadow: none;
      margin: 12px;
      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpointsPixels.md}) {
        padding: 24px;
        margin: 32px;
      }
    }

    .MuiBackdrop-root {
      background: rgb(240, 236, 243);
      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpointsPixels.md}) {
        background: rgba(0, 0, 0, 0.85);
      }
    }

    &.close-dialog {
      .MuiDialog-paper {
        background-color: ${({ theme }) => theme.colors.grayBg} !important;
      }
      max-width: 100% !important;
    }
    &.purple {
      .MuiDialog-paper {
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0) 47.4%
          ),
          rgb(110, 38, 219);
      }
    }
    &.full-screen {
      .MuiDialog-paper {
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
      .top-wrapper {
        top: 4px;
        right: 4px;
      }
    }
  }
`;

const TopWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 1000;
`;

const TopClose = styled(CloseIcon)`
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  &.purple {
    color: #fff;
  }
`;

function QueryModal({
  closeModalCallback,
  children,
  modalStyles = {},
  mode,
  hideClose = false,
  closeTitle,
  closeContent,
  closeBack,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(
    `(max-width: ${theme.breakpointsPixels.md}px)`,
  );
  const [close, setClose] = useState(false);
  const router = useRouter();
  const isCandidatePage = router.route === '/candidate/[...NameIdTab]';

  useEffect(() => {
    if (close && (!closeTitle || !isCandidatePage)) {
      closeModalCallback();
    }
  }, [close]);
  return (
    <TgpDialog
      onClose={() => setClose(true)}
      open
      fullScreen={fullScreen}
      className={`${close && isCandidatePage && 'close-dialog'} ${mode} `}
      style={modalStyles.dialog}
    >
      {!hideClose && (
        <TopWrapper className="top-wrapper">
          <TopClose
            onClick={() => setClose(true)}
            style={modalStyles.closeButton}
            className={!(closeTitle && close) && mode}
          />
        </TopWrapper>
      )}
      {(!closeTitle || !close || !isCandidatePage) && children}
      {closeTitle && close && isCandidatePage && (
        <>
          <H2 style={{ color: '#292936' }}>{closeTitle}</H2>
          <Body13 style={{ color: '#11111F', marginTop: 8 }}>
            {closeContent}
          </Body13>
          <Grid container spacing={2} style={{ marginTop: 18 }}>
            <Grid item xs={6}>
              <BlackButton
                fullWidth
                className="outline"
                onClick={closeModalCallback}
              >
                YES, EXIT
              </BlackButton>
            </Grid>
            <Grid item xs={6}>
              <BlackButton fullWidth onClick={() => setClose(false)}>
                {closeBack}
              </BlackButton>
            </Grid>
          </Grid>
        </>
      )}
    </TgpDialog>
  );
}

QueryModal.propTypes = {
  closeModalCallback: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  modalStyles: PropTypes.object,
  mode: PropTypes.string,
  hideClose: PropTypes.bool,
  closeTitle: PropTypes.string,
  closeContent: PropTypes.string,
  closeBack: PropTypes.string,
};

export default QueryModal;
