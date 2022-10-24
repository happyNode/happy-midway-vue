import request from '@/utils/request'
import { PermissionAction, PermissionPrefix } from '@/core/permission/decorator'

@PermissionPrefix('sys/dept')
class SysDept {
  @PermissionAction()
  list() {
    return request({
      url: 'dept/list',
      method: 'get'
    })
  }

  @PermissionAction()
  move(data) {
    return request({
      url: 'dept/move',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  update(data) {
    return request({
      url: 'dept/update',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  delete(data) {
    return request({
      url: 'dept/delete',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  add(data) {
    return request({
      url: 'dept/add',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  info(query) {
    return request({
      url: 'dept/info',
      method: 'get',
      params: query
    })
  }

  @PermissionAction()
  transfer(data) {
    return request({
      url: 'dept/transfer',
      method: 'post',
      data
    })
  }
}

export default SysDept
