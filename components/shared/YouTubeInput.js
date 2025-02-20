import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function youtubeParser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

const YouTubeInput = ({ onChangeCallback, initalId }) => {
  const [state, setState] = useState({
    url: '',
    youtubeId: false,
  });
  useEffect(() => {
    if (initalId) {
      const url = `https://www.youtube.com/watch?v=${initalId}`;
      const id = youtubeParser(url);
      setState({
        url,
        youtubeId: id,
      });
    }
  }, []);

  const onChangeField = (value) => {
    const id = youtubeParser(value);

    setState({
      url: value,
      youtubeId: id,
    });
    onChangeCallback(value, id);
  };

  const isValid = state.url === '' || state.youtubeId;
  return (
    <TextField
      name="YouTube URL"
      variant="outlined"
      label="YouTube URL"
      value={state.url}
      fullWidth
      error={!isValid}
      helperText={isValid ? '' : 'Please enter a valid youtube url'}
      onChange={(e) => {
        onChangeField(e.target.value);
      }}
    />
  );
};

YouTubeInput.propTypes = {
  onChangeCallback: PropTypes.func,
  initalId: PropTypes.string,
};

export default YouTubeInput;
