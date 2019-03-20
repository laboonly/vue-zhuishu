import request from '@/utils/request'

export function getcategories () {
  return request({
    url: 'categories',
    method: 'get'
  })
}
export function getclass (data) {
  return request({
    url: 'category-info' + '?gender=male&type=hot&major=' + data + '&minor=&start=0&limit=20',
    method: 'get'
  })
}
