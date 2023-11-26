/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { getDetail, getList } from '../../api/user';
import { Item } from '../../components/item';
import { Items } from '../../components/items';
import { PageWrapper } from '../../components/PageWrapper';
import { User, UserDetail } from '../../types/user';

interface Props {
  keyword?: string;
}

const ListPage = (props: Props) => {
  const { keyword } = props;

  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<UserDetail | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    fetchUsers(`/search?q=${keyword}`);
  }, [keyword]);

  const fetchUsers = useCallback(async (keyword?: string) => {
    setLoading(true);
    try {
      const { data } = await getList(keyword || '');
      const { users } = data;
      setUsers(users);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUser = useCallback(async (id: number) => {
    setLoadingDetail(true);
    try {
      const { data } = await getDetail(id);
      setUser(data);
    } catch (error) {
      return error;
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const topFive: User[] = [...users]
    .sort((a, b) => {
      if (a.username > b.username) {
        return 1;
      }
      if (a.username < b.username) {
        return -1;
      }
      return 0;
    })
    .slice(0, 5);

  const handleViewProfile = (id: number) => {
    setDrawerOpen(true);
    fetchUser(id);
  };

  return (
    <>
      <PageWrapper
        renderContent={() => (
          <Items
            list={users}
            loading={loading}
            topFive={topFive}
            onViewProfile={handleViewProfile}
          />
        )}
      />
      <Item
        open={drawerOpen}
        loading={loadingDetail}
        onClose={() => setDrawerOpen(false)}
        user={user}
      />
    </>
  );
};

export default ListPage;
