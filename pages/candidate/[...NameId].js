import CandidatePage from '/containers/CandidatePage';
import tgpApi from '/api/tgpApi';

export default function Candidate({ ssrState }) {
  return <CandidatePage ssrState={ssrState} />;
}

export async function getServerSideProps(context) {
  // x-real-ip
  // const ip = req.connection.remoteAddress
  const { NameId } = context.params;
  const id = NameId?.length > 1 ? NameId[1] : false;
  if (id && id !== 'undefined' && typeof id !== 'undefined') {
    const api = tgpApi.newCandidate.find;
    const url = `${api.url}?id=${id}&allFields=true`;
    const res = await fetch(url);
    let candidate;
    try {
      candidate = await res.json();
    } catch (e) {
      candidate = {
        candidate: {},
      };
    }

    const api3 = tgpApi.supportCandidate.candidateSupports;
    const res3 = await fetch(`${api3.url}?candidateId=${id}`);
    let candidateSupports = [];
    let total = 0;
    try {
      ({ candidateSupports, total } = await res3.json());
    } catch (e) {}

    return {
      props: {
        ssrState: {
          candidate: candidate.candidate,
          candidatePositions: candidate.candidatePositions || [],
          similarCampaigns: candidate.similarCampaigns || [],
          id,
          candidateSupports,
          supportCount: total,
          userAgent: context.req.headers['user-agent'],
        },
      }, // will be passed to the page component as props
    };
  }
  return {
    props: {},
  };
}
