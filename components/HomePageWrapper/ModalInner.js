import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Cancel';

import { HomePageContext } from '/containers/HomePage';
import BlackButton from '../shared/buttons/BlackButton';

const Wrapper = styled.div`
  padding: 36px;
  background-color: #fff;
  border-radius: 4px;
  max-width: 600px;
  min-width: 300px;
  font-size: 24px;
`;

const CloseWrapper = styled.div`
  display: inline-block;
  padding: 0 0 12px 12px;
  cursor: pointer;
`;

const Feedback = styled.div`
  margin-top: 12px;
  font-size: 16px;
  text-decoration: underline;
  color: gray;
  text-align: center;
  cursor: pointer;
`;

const ModalInner = ({ closeModalCallback }) => {
  const { showFeedbackCallback } = useContext(HomePageContext);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '21589597',
        formId: '39b42d7f-826d-435d-a41f-bd692ee1298e',
        target: '#hubspotFormModal',
      });
    }
  }, []);

  const handleFeedback = () => {
    closeModalCallback();
    showFeedbackCallback();
  };
  return (
    <Wrapper>
      <div className="text-right">
        <CloseWrapper onClick={closeModalCallback}>
          <CloseIcon />
        </CloseWrapper>
      </div>
      <strong>#goodparty Tuesdays are coming soon...</strong>
      <br />
      <br />
      Sign up to be the first to know! ❤️ 🎉
      <br />
      <br />
      {!showForm && (
        <>
          <BlackButton
            fullWidth
            onClick={() => {
              setShowForm(true);
            }}
          >
            Sign Up
          </BlackButton>
          <br />
          <br />
        </>
      )}
      <div
        id="hubspotFormModal"
        style={{ display: showForm ? 'block' : 'none' }}
      />
      <Feedback onClick={handleFeedback}>Give Feedback</Feedback>
    </Wrapper>
  );
};

export default ModalInner;
