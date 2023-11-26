import { Input } from 'antd';

const { Search } = Input;

interface Props {
  loading: boolean;
  onSearch: (value: string) => void;
}

export const Searching = (props: Props) => {
  return (
    <Search
      style={{ marginBottom: '20px' }}
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading={props.loading}
      onSearch={props.onSearch}
    />
  );
};
