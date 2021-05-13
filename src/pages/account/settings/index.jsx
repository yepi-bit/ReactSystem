import React from 'react';
import {history} from 'umi';
import {Card, Col, Row, Descriptions, Progress} from 'antd';
import {SettingTwoTone} from "@ant-design/icons/lib";
import styles from './index.less'



const settings = () => {
  return (
    <div>
      <Row gutter={24}>
        <Col xxl={6} md={9} xs={24}>
            <Card bordered={false} style={{marginBottom: 24}} >
              <div className={styles.avatarHolder}>
                <img alt="" src={'https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif'} />
              </div>
              <Descriptions title="兴趣" column={1} extra={
                <SettingTwoTone style={{fontSize: 16}} />
              }>
                <span>
                  暂无，设置后推荐更精准哦
                </span>
              </Descriptions>
            </Card>
        </Col>
        <Col xxl={18} md={15} xs={24}>
          <Card title="个人资料" bordered={false}
          //   className={styles.tabsCard}
          //   bordered={false}
          >
              <Progress percent={30} />
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <Progress type="circle" percent={30} format={percent => `${percent} Days`} />

          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default settings;
