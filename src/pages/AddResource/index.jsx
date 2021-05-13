import React, { useState } from 'react';
import {PageHeader, Descriptions, Card, Row, Col, Input, Form, Tooltip, Button } from "antd";
import "./style.less"
// import TextArea from "antd/lib/input/TextArea";
import AvatarPicture from "@/components/GlobalHeader/AvatarPicture";
import {SearchOutlined} from "@ant-design/icons/lib";

const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: {span: 24,},
    sm: {span: 5,},
    md: {span: 4,},
  },
  wrapperCol: {
    xs: {span: 24,},
    sm: {span: 16,},
    md: {span: 12,},
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: {span: 24,},
    sm: {span: 16, offset: 5,},
    md: {span: 8, offset: 4,},
    lg: {span: 7, offset: 4,}
  },
};

const addResource = () => {

  return (
    <div className="main">
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          className="site-page-header"
          title="我要推荐"
        />
        <Descriptions>
          <Descriptions.Item>
            <span>欢迎推荐优质编程资源，将获得积分奖励 💰</span>
          </Descriptions.Item>
        </Descriptions>
      </div>
      <Row>
        <Col span={24}>
          <Card>
            <Form
              {...formItemLayout}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label="名称"
                rules={[
                  { required: true, message: '请输入资源名'},]}
              >
                <Input placeholder="网站、文章等资源名，最多 25 字" maxLength={25} allowClear
                       addonAfter={
                         <Tooltip title="检测是否有重复资源" placement="topRight">
                           <SearchOutlined style={{fontSize: 16, cursor: 'pointer'}} />
                         </Tooltip>
                       }
                />
              </Form.Item>
              <Form.Item
                name="describe"
                label="描述"
                rules={[
                  {
                    required: true,
                    message: '请输入描述',
                  },
                ]}
              >
                <Input placeholder="用一句话简单介绍资源, 最多80字" maxLength={80} allowClear />
              </Form.Item>
              <Form.Item
                name="link"
                label="链接"
                rules={[
                  {
                    required: true,
                    message: '请填写链接',
                  },
                ]}
              >
                <Input placeholder="便于找到资源的网址, http(s)开头" allowClear />
              </Form.Item>
                <Form.Item
                  name="tag"
                  label="标签"
                  rules={[
                    {
                      required: true,
                      message: '请输入资源名',
                    },
                  ]}
                >
                  <Input placeholder="可选至多5个标签, 支持搜索" allowClear />
                </Form.Item>
              <Form.Item
                name="icon"
                label="图标"
                tooltip={{title: '正方形图标展示效果最佳', placement: 'topLeft'}}
              >
               <AvatarPicture />
              </Form.Item>
              <Form.Item
                name="dedails"
                label="详情"
              >
                <TextArea
                  placeholder="详细介绍该资源的作用, 用法等" autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item
                {...submitFormLayout}
                style={{
                  marginTop: 32,
                }}
              >
                <Row gutter={24}>
                  <Col span={16}>
                    <Button type="primary" htmlType="submit" block >
                    提交
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Tooltip placement="topRight" overlayStyle={{minWidth: 260}} title={<AvatarPicture />}>
                      <Button>预览</Button>
                    </Tooltip>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default addResource;
