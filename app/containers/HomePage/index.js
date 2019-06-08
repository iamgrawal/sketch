import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Layout } from 'antd';
import ACTIONS from '../../redux/actions';
import Editor from '../../components/Editor';
import Toolbar from '../../components/Toolbar';

const { Footer } = Layout;

function HomePage(props) {
  const editorOnClick = event => {
    console.log('editor clicked', event, event.clientX, event.clientY);
    // props.addPoint(point);
  };

  return (
    <Layout className="layout">
      <Toolbar
        changeColor={props.changeColor}
        incrementWeight={props.incrementWeight}
        decrementWeight={props.decrementWeight}
      />
      <Editor editorOnClick={editorOnClick} />
      <Footer style={{ textAlign: 'center', padding: '0' }}>
        Built with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by{' '}
        <a href="https://github.com/iamgrawal" target="_blank">
          iamgrawal
        </a>
      </Footer>
    </Layout>
  );
}

HomePage.prototype = {
  changeColor: PropTypes.func,
  incrementWeight: PropTypes.func,
  decrementWeight: PropTypes.func,
  addPoint: PropTypes.addPoint,
};

const mapStateToProps = state => ({
  color: state.editor.color,
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(ACTIONS.changeColor(color)),
  incrementWeight: () => dispatch(ACTIONS.incrementWeight()),
  decrementWeight: () => dispatch(ACTIONS.decrementWeight()),
  addPoint: point => dispatch(ACTIONS.addPoint(point)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
