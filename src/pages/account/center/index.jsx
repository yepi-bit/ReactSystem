import React from 'react';
import "./index.less"

const center = () => {
  return (
    <div className="content">
      <div className="content_children">
        <div className="main">
          <div className="leftMenu">
            <ul className="item">
              <li className='item_chilren selected'>
                <a href='#'>
                  <span>个人资料</span>
                </a>
              </li>
              <li>
                我的收藏
              </li>
              <li>
                推荐记录
              </li>
              <li>
                消息通知
              </li>
            </ul>
          </div>
          <div className="rightMenu">
            rightMenu
          </div>
        </div>
      </div>
    </div>
    // <div className="leftMenu___2n7Ns">
    //   <ul className="ant-menu ant-menu-light ant-menu-root ant-menu-inline" direction="ltr" role="menu">
    //     <li className="ant-menu-item ant-menu-item-only-child ant-menu-item-selected" role="menuitem"
    //         style="padding-left: 24px;">个人资料
    //     </li>
    //     <li className="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 24px;">我的收藏</li>
    //     <li className="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 24px;">推荐记录</li>
    //     <li className="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 24px;">消息通知</li>
    //   </ul>
    // </div>

  );
};

export default center;
