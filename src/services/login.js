import request from '@/utils/request';
export async function fakeAccountLogin(params) {
  return request('/api/login/Account', {
    method: 'POST',
    data: params,
  });
}
