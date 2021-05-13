import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
  // return request('/api/admin/users')
}
export async function queryNotices() {
  return request('/api/notices');
}

export async function getUsers() {
  return request('/api/admin/users');
}
