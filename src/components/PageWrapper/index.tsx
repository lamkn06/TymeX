import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { ReactNode } from 'react';
import './index.scss';

interface Props {
  renderContent(): ReactNode;
}
export const PageWrapper = (props: Props) => {
  return (
    <Layout className="layout">
      <Content>
        <div className="site-layout-content">{props.renderContent()}</div>
      </Content>
    </Layout>
  );
};
