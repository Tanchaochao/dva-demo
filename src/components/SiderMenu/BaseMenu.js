import React from 'react';
import { Menu, Icon } from 'antd';
import menuData from '../../config/menu';
const { SubMenu } = Menu;

const Menus =(props => {
    const getNavMenuItems = (menusData) => {
        return menusData
          .map(item =>{
            if(item.children){
                return (
                    <SubMenu
                      key={item.path}
                      title={(
                        <span>
                          <Icon type={item.icon} />
                          <span className="menu-name">{item.name}</span>
                          {/* <p>{item.name}</p> */}
                        </span>
                    )}
                    >
                      {getNavMenuItems(item.children)}
                    </SubMenu>
                  );
            }
            return (
                <Menu.Item key={item.path}>
                    <Icon type={item.icon} />
                    <span className="menu-name">{item.name}</span>
                    {/* <p>{item.name}</p> */}
                </Menu.Item>
            );
          })
      };
      const menuItems = getNavMenuItems(menuData);
      return (
        <Menu
          mode="inline"
        >
          {menuItems}
        </Menu>
      ); 
});

export default Menus;