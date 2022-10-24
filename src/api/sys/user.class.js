import request from '@/utils/request'
import { PermissionAction, PermissionPrefix } from '@/core/permission/decorator'

@PermissionPrefix('sys/user')
class SysUser {
  @PermissionAction()
  page(params) {
    return request({
      url: 'user/page',
      method: 'get',
      params
    })
  }

  @PermissionAction()
  add(data) {
    return request({
      url: 'user/add',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  info(query) {
    return request({
      url: `user/info/${query.userId}`,
      method: 'get'
    })
  }

  @PermissionAction()
  update(data) {
    return request({
      url: 'user/update',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  password(data) {
    return request({
      url: 'user/password',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  delete(data) {
    return request({
      url: 'user/delete',
      method: 'post',
      data
    })
  }
}

export default SysUser
