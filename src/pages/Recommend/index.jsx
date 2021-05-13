import React from 'react';
import styles from './style.less';
import {PageContainer} from "@ant-design/pro-layout";
import {Input, Space, Radio, Popover, Avatar, Image, Tag, Card, Row, Col} from "antd";
import ProCard from "@ant-design/pro-card";
import {LoginOutlined, ShareAltOutlined, StarOutlined, TagsOutlined, RiseOutlined } from "@ant-design/icons";

const content = (
  <div>
    <Avatar shape="square" size={64}
            src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    />
  </div>
);
const { Search } = Input;
// 搜索
const onSearch = value => console.log(value);
const contents = (
  <div className={styles.pageHeaderContent}>
    发现编程世界的满天星辰 ✨
  </div>
);
// 顶部图片
const extraContent = (
  <div className={styles.extraImg}>
    <img
      alt="图片"
      src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
    />
  </div>
);
const recommend = () => {
  return (
    <div>
      <PageContainer content={contents} extraContent={extraContent}>

        <Space direction="vertical">
          <Search placeholder="全站搜索编程资源" allowClear onSearch={onSearch}  enterButton />
        </Space>
        <>
          <Popover content={content} placement="top" title="ChinaRen">
            <ProCard
              hoverable bordered
              style={{ maxWidth: 550 }}
              actions={[
                <StarOutlined  key="setting"  />,
                <ShareAltOutlined  key="edit" />,
                <LoginOutlined  key="ellipsis" />,
              ]}
            >
              <Avatar shape="square" size={64}
                      src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              />
              <div>ChinaRen</div>
              <Tag color="volcano-inverse">前端</Tag>
              <Tag color="orange-inverse">文档</Tag>
              <Tag color="gold-inverse">教程</Tag>
            </ProCard>
          </Popover>

        </>
      </PageContainer>
    </div>
  );
};

export default recommend;
