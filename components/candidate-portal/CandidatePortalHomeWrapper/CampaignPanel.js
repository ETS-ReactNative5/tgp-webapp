/**
 *
 * CampaignPanel
 *
 */

import React, { useContext } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

import { CandidatePortalHomePageContext } from '/containers/candidate-portal/CandidatePortalHomePage';

import PortalPanel from '../shared/PortalPanel';
import { Font16, FontH3 } from '../../shared/typogrophy';
import RangeSelector from '../shared/RangeSelector';
import BlackButton, { InnerButton } from '../../shared/buttons/BlackButton';
import CampaignChart from './CampaignChart';
import { numberFormatter } from '../../../helpers/numberHelper';
import AddCampaignUpdateModal from '../shared/AddCampaignUpdateModal';

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
`;

const Title = styled(Font16)`
  font-weight: 700;
  margin-bottom: 10px;
`;

const Stat = styled(Font16)`
  display: inline-block;
  margin-right: 12px;
  color: #636363;
`;

const Icon = styled.div`
  display: inline-block;
  color: #2cc987;
  margin-right: 2px;

  &.down {
    color: #bf0020;
  }
`;

export const progressPerc = (thisTotal, lastTotal) => {
  if (thisTotal === 0 && lastTotal === 0) {
    return (
      <>
        <Icon>
          <FaLongArrowAltUp />
        </Icon>
        0%
      </>
    );
  }
  if (lastTotal === 0) {
    return (
      <>
        <Icon>
          <FaLongArrowAltUp />
        </Icon>
        100%
      </>
    );
  }
  const perc = (thisTotal * 100) / lastTotal;
  const sign =
    thisTotal > lastTotal ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />;
  return (
    <>
      <Icon>{sign}</Icon>
      {numberFormatter(parseInt(perc, 10))}%
    </>
  );
};

function CampaignPanel({ range, onChangeRange }) {
  const { stats } = useContext(CandidatePortalHomePageContext);
  const visitors = stats?.stats?.visitors;
  const shares = stats?.stats?.shares;
  const endorsers = stats?.stats?.endorsers;

  const fields = [
    { label: 'VIEWS', data: visitors || {} },
    { label: 'SHARES', data: shares || {} },
    { label: 'ENDORSEMENTS', data: endorsers || {} },
  ];
  return (
    <PortalPanel color="#2CCDB0">
      <Row>
        <FontH3 style={{ margin: 0 }}>Campaign Page</FontH3>
        <RangeSelector range={range} onChange={onChangeRange} />
      </Row>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Grid container spacing={2}>
            {fields.map((field) => (
              <Grid item xs={12} lg={4} key={field.label}>
                <Title>{field.label}</Title>
                <Stat>{numberFormatter(field.data.total)}</Stat>
                <Stat>
                  {progressPerc(field.data.total, field.data.lastPeriod)}
                </Stat>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginTop: '40px' }}>
              <AddCampaignUpdateModal
                context={CandidatePortalHomePageContext}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5} style={{ height: '100%' }}>
          <CampaignChart />
        </Grid>
      </Grid>
    </PortalPanel>
  );
}

export default CampaignPanel;
