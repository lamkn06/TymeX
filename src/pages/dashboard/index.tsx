import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Col, Layout, Menu } from 'antd';
import React, { lazy } from 'react';
import { Searching } from '../../components/searching/intex';

const List = lazy(() => import('../list'));

const { Header, Content, Footer, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `user${key}`,
    icon: React.createElement(icon),
    label: `Users`,
  };
});

const Dashboard: React.FC = () => {
  const [keyword, setKeyword] = React.useState<string>('');

  const handleOnSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0' }}>
          <Col>
            <Searching loading={false} onSearch={handleOnSearch} />
            <Sider width={'100%'} style={{ height: '100%' }}>
              <Menu
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['user1']}
                items={items2}
              />
            </Sider>
          </Col>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <List keyword={keyword} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Dashboard;
