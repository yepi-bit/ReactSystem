import React from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import ProCard from '@ant-design/pro-card';
import {Avatar, Image, Tag, Popover} from 'antd';
import { ShareAltOutlined , LoginOutlined , StarOutlined } from '@ant-design/icons';
import NavigationSearch from "../../components/NavigationSearch/navigationSearch";

const content = (
  <div>
    <Avatar shape="square" size={64}
            src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    />
  </div>
);
const obligatory = () => {
  return (
    <div>
      <PageContainer>
        <NavigationSearch />
        <>
          <Popover content={content} title="ChinaRen">
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
          </Popover>,

        </>
      </PageContainer>
    </div>
  );
};

export default obligatory;
