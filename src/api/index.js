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

export function getBookRelated (id) {
  return request({
    url: 'book-info/' + id,
    method: 'get'
  })
}

// export function getcomment (bookid, sort, type, start, limit) {
//   return request({
//     url: 'book/discussions' + `?book=${bookid}&type=${type}&sort=${sort}}&start=${start}&limit=${limit}`,
//     method: 'get'
//   })
// }

export function getcomment (bookid) {
  return request({
    url: 'book/discussions' + `?book=${bookid}`,
    method: 'get'
  })
}
