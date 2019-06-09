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
  const canvasRef = React.useRef(null);
  return (
    <Layout.Content style={{ padding: '0 20px' }}>
      <Canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={e => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          props.editorOnClick(e, ctx);
        }}
      />
    </Layout.Content>
  );
}

Editor.propTypes = {
  editorOnClick: PropTypes.func,
};

export default memo(Editor);
