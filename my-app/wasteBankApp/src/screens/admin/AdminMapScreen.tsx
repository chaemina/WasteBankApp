import React from 'react';
import AdminMapTemplate from '../../components/admin/templates/AdminMapTemplate';
import { data } from '../../constants/MarkerInfo';

const AdminMapScreen = () => {

  return (
    <>
        <AdminMapTemplate data={data.response} />
    </>
  );
};

export default AdminMapScreen;
