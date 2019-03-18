import request from '@/utils/request'

export function getclass (data) {
  return request({
    url: '/user/admin',
    method: 'post',
    data
  })
}
