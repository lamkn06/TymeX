/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, List, Skeleton, Tabs } from 'antd';

import { User } from '../../types/user';

interface Props {
  loading: boolean;
  list: User[];
  topFive: User[];

  onViewProfile(id: number): void;
}

export const Items = (props: Props) => {
  const items = [
    {
      label: 'Top 5 users',
      key: 'item-1',
      children: (
        <List
          itemLayout="horizontal"
          dataSource={props.topFive}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  onClick={() => {
                    props.onViewProfile(item.id);
                  }}
                  key={`a-${item.username}`}
                >
                  View Profile
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={props.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={
                    <a
                      onClick={() => {
                        props.onViewProfile(item.id);
                      }}
                    >
                      {item.username}
                    </a>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ),
    },
    {
      label: 'All users',
      key: 'item-2',
      children: (
        <List
          itemLayout="horizontal"
          dataSource={props.list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  onClick={() => {
                    props.onViewProfile(item.id);
                  }}
                  key={`a-${item.username}`}
                >
                  View Profile
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={props.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={
                    <a
                      onClick={() => {
                        props.onViewProfile(item.id);
                      }}
                    >
                      {item.username}
                    </a>
                  }
                  description={item.email}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ),
    },
  ];

  return <Tabs items={items} />;
};
