import React from 'react';
import { Image } from 'antd';
import {PageContainer} from "@ant-design/pro-layout";
import { Tag, Divider } from 'antd';
import NavigationSearch from "../../components/NavigationSearch/navigationSearch"

const programme = () => {
  return (
    <div>
      <PageContainer content="欢迎使用">
        <NavigationSearch />
        <Image.PreviewGroup>
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </Image.PreviewGroup>
        <>
          <Divider orientation="left">Presets Inverse</Divider>
          <div>
            <Tag color="magenta-inverse">magenta</Tag>
            <Tag color="red-inverse">red</Tag>
            <Tag color="volcano-inverse">volcano</Tag>
            <Tag color="orange-inverse">orange</Tag>
            <Tag color="gold-inverse">gold</Tag>
            <Tag color="lime-inverse">lime</Tag>
            <Tag color="green-inverse">green</Tag>
            <Tag color="cyan-inverse">cyan</Tag>
            <Tag color="blue-inverse">blue</Tag>
            <Tag color="geekblue-inverse">geekblue</Tag>
            <Tag color="purple-inverse">purple</Tag>
          </div>
        </>,
      </PageContainer>
    </div>
  );
};

export default programme;
