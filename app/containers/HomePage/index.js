import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Layout } from 'antd';
import ACTIONS from '../../redux/actions';
import Editor from '../../components/Editor';
import Toolbar from '../../components/Toolbar';

const { Footer } = Layout;
function draw(ctx, point) {
  ctx.beginPath();
  ctx.fillStyle = point.color;
  ctx.arc(point.x, point.y, point.weight, 0, 2 * Math.PI, true);
  ctx.fill();
}

function HomePage(props) {
  const editorOnClick = (event, ctx) => {
    if (props.clicked) {
      const point = {
        x: event.clientX,
        y: event.clientY,
        color: props.color,
        weight: props.weight,
      };
      draw(ctx, point);
    }
  };

  return (
    <Layout
      className="layout"
      onMouseDown={props.mouseDown}
      onMouseUp={props.mouseUp}
    >
      <Toolbar
        color={props.color}
        changeColor={props.changeColor}
        weight={props.weight}
        increaseWeight={props.increaseWeight}
        decreaseWeight={props.decreaseWeight}
      />
      <Editor editorOnClick={editorOnClick} />
      <Footer style={{ textAlign: 'center', padding: '0' }}>
        Built with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />{' '}
        by{' '}
        <a href="https://github.com/iamgrawal" target="_blank">
          iamgrawal
        </a>
      </Footer>
    </Layout>
  );
}

HomePage.prototype = {
  addPoint: PropTypes.addPoint,
  changeColor: PropTypes.func,
  clicked: PropTypes.bool,
  color: PropTypes.string,
  decreaseWeight: PropTypes.func,
  increaseWeight: PropTypes.func,
  points: PropTypes.arrayOf({
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.number,
  }),
  weight: PropTypes.number,
};

const mapStateToProps = state => ({
  clicked: state.editor.clicked,
  color: state.editor.color,
  points: state.editor.points,
  weight: state.editor.weight,
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(ACTIONS.changeColor(color)),
  increaseWeight: () => dispatch(ACTIONS.increaseWeight()),
  decreaseWeight: () => dispatch(ACTIONS.decreaseWeight()),
  addPoint: point => dispatch(ACTIONS.addPoint(point)),
  mouseDown: () => dispatch(ACTIONS.mouseDown()),
  mouseUp: () => dispatch(ACTIONS.mouseUp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
