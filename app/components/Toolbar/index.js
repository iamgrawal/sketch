import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Layout, Menu } from 'antd';

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

const Item = styled(Menu.Item)`
  padding: 0;
  margin: 16px;
  &:hover {
    background-color: inherit;
  }
`;

const MenuIcon = styled(Icon)`
  font-size: 20px !important;
  text-align: center;
  margin: auto 5px;
  &:hover {
    color: #fff;
  }
`;

function Toolbar(props) {
  const inputRef = React.createRef(null);
  const showColor = e => {
    console.log('show Color', e, inputRef);
    const input = inputRef.current;
    input.click();
  };
  return (
    <Layout.Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Item key="1" onClick={showColor}>
          <Input
            ref={inputRef}
            type="color"
            value={props.color}
            style={{ display: 'none' }}
            onChange={e => props.changeColor(e.target.value)}
          />
          <MenuIcon type="bg-colors" style={{ color: props.color }} />
        </Item>
        <Item key="3">
          <MenuIcon type="highlight" />
        </Item>
        <Item key="4">
          <MenuIcon type="undo" />
        </Item>
        <Item key="5">
          <MenuIcon type="redo" />
        </Item>
        <Item key="6">
          <MenuIcon type="font-colors" />
        </Item>
        <Item key="7">
          <MenuIcon type="up" onClick={props.increaseWeight} />
          <span style={{ margin: 'auto 5px', fontSize: '16px' }}>
            {props.weight ? props.weight : 0}
          </span>
          <MenuIcon type="down" onClick={props.decreaseWeight} />
        </Item>
      </Menu>
    </Layout.Header>
  );
}

Toolbar.propTypes = {
  changeColor: PropTypes.func,
  color: PropTypes.string,
  decreaseWeight: PropTypes.func,
  increaseWeight: PropTypes.func,
  weight: PropTypes.number,
};

export default memo(Toolbar);
