import request from '@/utils/request'

// 获取分类
export function getcategories () {
  return request({
    url: 'categories',
    method: 'get'
  })
}

// 获取分类信息
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

export function getreCommend (bookid) {
  return request({
    url: 'recommend/' + bookid,
    method: 'get'
  })
}
