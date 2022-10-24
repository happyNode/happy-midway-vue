import request from '@/utils/request'
import { PermissionAction, PermissionPrefix } from '@/core/permission/decorator'

@PermissionPrefix('sys/role')
class SysRole {
  @PermissionAction()
  info(query) {
    return request({
      url: `role/info/${query.roleId}`,
      method: 'get'
    })
  }

  @PermissionAction()
  list() {
    return request({
      url: 'role/list',
      method: 'get'
    })
  }

  @PermissionAction()
  page(query) {
    return request({
      url: 'role/page',
      method: 'get',
      params: query
    })
  }

  @PermissionAction()
  add(data) {
    return request({
      url: 'role/add',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  update(data) {
    return request({
      url: 'role/modify',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  delete(data) {
    return request({
      url: 'role/delete',
      method: 'post',
      data
    })
  }
}

export default SysRole
