/*eslint-disable*/

import axios from 'axios';
import { showAlert } from './alert';

//type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url = type === 'password' ? 'updateMyPassword' : 'updateMe';

    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/users/${url}`,
      data: data
    });
    if ((res.data.status = 'success')) {
      showAlert('Success', `${type.toUpperCase()} updated successfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
