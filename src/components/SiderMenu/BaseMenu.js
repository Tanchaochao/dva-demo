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
                          { item.level && item.level === 1 ? <i className={`hxydicon ${item.icon}`} /> : null}
                          <span>{item.name}</span>
                          { item.level && item.level === 1 ?  <p className="placeholder">{item.name}</p>: null}
                        </span>
                    )}
                    >
                      {getNavMenuItems(item.children)}
                    </SubMenu>
                  );
            }
            return (
                <Menu.Item key={item.path} >
                    { item.level && item.level === 1 ? <i className={`hxydicon ${item.icon}`} /> : null}
                    <span>{item.name}</span> 
                    { item.level && item.level === 1 ?  <p className="placeholder no_children">{item.name}</p>: null}
                </Menu.Item>
            );
          })
      };
      const menuItems = getNavMenuItems(menuData);
      return (
        <Menu
          mode="inline"
          theme="dark"
        >
          {menuItems}
        </Menu>
      ); 
});

export default Menus;