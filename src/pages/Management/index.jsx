import React, {useRef, useState} from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import { Button, Avatar, Image, Switch, Modal, Cascader, Upload } from 'antd'
import ProTable from '@ant-design/pro-table'
import {PlusOutlined, UploadOutlined} from '@ant-design/icons'
import ProForm, { ProFormText ,ProFormTextArea} from '@ant-design/pro-form';
import {getUsers} from '@/services/user'

const management = () => {
  const  actionRef = useRef()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const closeModal = () => {setIsModalVisible(false)}
  const openForm = () => {setIsModalVisible(true)}
  const options = [
    {
      value: 'zhejiang',
      label: '前端',
      children: [
        {
          value: 'hangzhou',
          label: 'JavaScript',
        },
      ],
    },
    {
      value: 'Jiangsu',
      label: '后端',
      children: [
        {
          value: 'nanjing',
          label: 'Springboot',
        },
      ],
    },
  ];
  const columns =[
    {
      title:'头像',
      dataIndex:'avatar_url',
      hideInSearch:true,
      render: (_, record) =>
        <Avatar
          src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        />
    },
    {
      title:'用户名',
      dataIndex:'management'
    },
    {
      title:'是否禁用',
      dataIndex:'is_locked',
      render: (_, record) =>
        <Switch checkedChildren="开启"
                unCheckedChildren="关闭"
                defaultChecked={record.is_locked ===0}
                  onChange={() => {}}
          />
    },
    {
      title:'创建时间',
      dataIndex:'created_at',
      hideInSearch:true
    },
    {
      title:'操作',
      render: (_, record) =><a onChange={()=>{} }>编辑</a>
    },
  ]

  return (
      <PageContainer>
        <ProTable
          columns={columns}
          actionRef={actionRef}
          request={async (params = {}) => getUsers()
        }
          rowKey="id"
          search={{
            labelWidth: 'auto',
        }}
          pagination={{
          pageSize: 5,
        }}
          dateFormatter="string"
          headerTitle="用户信息"
          toolBarRender={() => [
            <Button key="button" icon={<PlusOutlined />} type="primary" onClick={openForm}>
              新增
            </Button>,
           ]}
        />
        <Modal title="添加用户" visible={isModalVisible}  onCancel={closeModal} footer={null}>
          <ProForm
            onFinish={ (values) => message.success('提交成功') }
          >
          <ProFormText
            name="name"
            label="用户名称"
            placeholder="请输入名称"
            rules={[{required: true, message:"请输入名称"}]}
          />
          <ProForm.Item
            name="label"
            label="分类"
            rules={[{required: true, message:"请输入分类"}]}
          >
            <Cascader options={options} placeholder="请选择分类" />
          </ProForm.Item>
            <ProForm.Item
              name="picture"
              label="图片"
              rules={[{required: true, message:"选择图片"}]}
            >
              <Upload listType="picture"maxCount={1} >
              <Button icon={<UploadOutlined />}>上传图片</Button>
              </Upload>
            </ProForm.Item>

            <ProFormTextArea
              name="dedails"
              label="详情"
              placeholder="请输入名称"
              rules={[{required: true, message:"请输入详情"}]}
            />

            </ProForm>
        </Modal>
      </PageContainer>
  );
};

export default management;
