import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';

const Canvas = styled.canvas`
  background: #fff;
  padding: 24;
  height: calc(100vh - 85px);
  width: 100%;
`;

function Editor(props) {
  return (
    <Layout.Content style={{ padding: '0 20px' }}>
      <Canvas onClick={props.editorOnClick}/>
    </Layout.Content>
  );
}

Editor.propTypes = {
  editorOnClick: PropTypes.func,
};

export default memo(Editor);
