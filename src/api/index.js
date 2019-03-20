import request from '@/utils/request'

export function getcategories () {
  return request({
    url: 'categories',
    method: 'get'
  })
}
export function getclylist (gender, type, major, minor, start, limit) {
  return request({
    url: 'category-info' + `?gender=${gender}&type=${type}&major=${major}&minor=${minor}&start=${start}&limit=${limit}`,
    method: 'get'
  })
}
