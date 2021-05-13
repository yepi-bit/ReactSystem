import React from 'react';
import {Input, Space} from "antd";

const onSearch = value => console.log(value);
const { Search } = Input;

const AllstationSearch = () => {
  return (
    <div>
      <Space direction="vertical">
        <Search placeholder="全站搜索编程资源" allowClear onSearch={onSearch}  enterButton />
      </Space>
    </div>
  );
};

export default AllstationSearch;
