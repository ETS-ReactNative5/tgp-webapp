/**
 *
 * TopIssuesList
 *
 */

import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { GoIssueOpened } from 'react-icons/go';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaTrash, FaEdit } from 'react-icons/fa';

import { AdminTopIssuesPageContext } from '/containers/admin/AdminTopIssuesPage';

import BlackButton, { InnerButton } from '../../shared/buttons/BlackButton';

const Issue = styled.div`
  padding: 12px 0;
  margin-bottom: 12px;
  border-top: solid 1px #666;
`;

const Position = styled.div`
  padding: 12px 0 12px 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Delete = styled.div`
  color: red;
  display: inline-block;
  margin-left: 16px;
  background-color: lightgray;
  border-radius: 50%;
  padding: 16px;
  width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;
`;

const SmallDelete = styled(Delete)`
  padding: 5px;
  width: 25px;
  height: 25px;
  font-size: 12px;
`;

const EditPosition = styled.div`
  display: inline-block;
`;

function TopIssuesList() {
  const {
    createPositionCallback,
    topIssues,
    deleteTopIssueCallback,
    deletePositionCallback,
    editPositionCallback,
  } = useContext(AdminTopIssuesPageContext);
  const [addNewPosition, setAddNewPosition] = useState(false);
  const [editPosition, setEditPosition] = useState(false);
  const [positionName, setPositionName] = useState('');

  const savePosition = (id) => {
    createPositionCallback(positionName, id);
    setAddNewPosition(false);
    setPositionName('');
  };

  const saveEdit = () => {
    editPositionCallback(editPosition.id, editPosition.name);
    setEditPosition(false);
  };
  return (
    <div>
      {topIssues.map((issue) => (
        <Issue key={issue.id}>
          <Row>
            <div>
              <strong>
                <GoIssueOpened /> &nbsp; {issue.name}
              </strong>
            </div>
            <div>
              <BlackButton
                onClick={() => {
                  setAddNewPosition(issue.id);
                }}
              >
                <InnerButton>Add a position for {issue.name}</InnerButton>
              </BlackButton>{' '}
              <Delete
                onClick={() => {
                  deleteTopIssueCallback(issue.id);
                }}
              >
                <FaTrash />
              </Delete>
            </div>
          </Row>
          {addNewPosition === issue.id && (
            <div>
              <br />
              <br />
              <TextField
                fullWidth
                primary
                label="Position Name"
                variant="outlined"
                value={positionName}
                onChange={(e) => setPositionName(e.target.value)}
              />
              <br />
              <br />
              <div className="text-right">
                <BlackButton
                  disabled={positionName === ''}
                  onClick={() => {
                    savePosition(issue.id);
                  }}
                >
                  <InnerButton>Save New Position</InnerButton>
                </BlackButton>
              </div>
            </div>
          )}
          {issue.positions.length > 0 && (
            <div>
              <br />
              <u>Positions:</u>
            </div>
          )}
          {issue.positions.map((position) => (
            <Position key={position.id}>
              <BsArrowRightShort /> &nbsp; &nbsp;
              {editPosition && editPosition.id === position.id ? (
                <EditPosition>
                  <TextField
                    primary
                    label="Edit Position"
                    variant="outlined"
                    value={editPosition.name}
                    onChange={(e) =>
                      setEditPosition({ ...editPosition, name: e.target.value })
                    }
                  />
                  &nbsp; &nbsp;
                  <BlackButton onClick={saveEdit}>
                    <InnerButton>Save</InnerButton>
                  </BlackButton>
                </EditPosition>
              ) : (
                <>
                  {position.name}
                  <SmallDelete
                    onClick={() => {
                      deletePositionCallback(position.id);
                    }}
                  >
                    <FaTrash />
                  </SmallDelete>
                  <SmallDelete
                    onClick={() => {
                      setEditPosition(position);
                    }}
                  >
                    <FaEdit />
                  </SmallDelete>
                </>
              )}
            </Position>
          ))}
        </Issue>
      ))}
    </div>
  );
}

TopIssuesList.propTypes = {};

export default TopIssuesList;
