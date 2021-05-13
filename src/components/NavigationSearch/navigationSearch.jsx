import React from 'react';
import {Card, Col, Input, Radio, Row, Select } from "antd";

const NavigationSearch = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card  bordered={false}  style={{ width: 1660 }}>
        <Row>
          <Col flex="100px">
            <label>
              <span>筛选</span>
            </label>
          </Col>
          <Col flex="auto"><Input placeholder="可选至多5个标签，支持搜索" allowClear />
          </Col>
        </Row>
        <Row>
          <Col flex="100px">排序</Col>
          <Col flex="auto">
            <Radio.Group size="Default"  style={{ marginBottom: 16 }}>
              <Radio.Button value="small">时间</Radio.Button>
              <Radio.Button value="default">评价</Radio.Button>
              <Radio.Button value="large">收藏</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default NavigationSearch


