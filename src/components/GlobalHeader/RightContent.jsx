import { Tag, Tooltip, message, Button  } from 'antd';
import React from 'react';
import { connect, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { SendOutlined } from '@ant-design/icons'
import AllstationSearch from '@/components/GlobalHeader/AllstationSearch'

const key = 'updatable';
const openAddResource = () => {
    message.success({ content: '推荐你的资源吧!', key, duration: 2});
};

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};
const text = <span>推荐资源, 收获积分和人气</span>

const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <AllstationSearch />
      <a href="/addResource">
        <Tooltip placement="bottomRight" title={text}>
        <Button  type="button" onClick={openAddResource} style={{opacity: 0.9, color: 'dark'}}>
          <SendOutlined  />
          <span>推荐</span>
        </Button >
        </Tooltip>
      </a>
      {/*<Link to='/addResource'><Button type="primary" size='large'>推荐</Button></Link>*/}
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="全站搜索编程"
        // defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Avatar menu />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
