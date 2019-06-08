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
  return (
    <Layout.Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Item key="1">
          <Input type="color" style={{ display: 'none' }} />
          <MenuIcon type="bg-colors" />
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
          <MenuIcon type="up" />
          <span style={{ margin: 'auto 5px', fontSize: '16px' }}>
            {props.penWidth ? props.penWidth : 0}
          </span>
          <MenuIcon type="down" style={{}} />
        </Item>
      </Menu>
    </Layout.Header>
  );
}

Toolbar.propTypes = {
  penWidth: PropTypes.number,
};

export default memo(Toolbar);
