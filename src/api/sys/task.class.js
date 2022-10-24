import request from '@/utils/request'
import { PermissionAction, PermissionPrefix } from '@/core/permission/decorator'

@PermissionPrefix('sys/task')
class SysTask {
  @PermissionAction()
  page(query) {
    return request({
      url: 'task',
      params: query,
      method: 'get'
    })
  }

  @PermissionAction()
  info(query) {
    return request({
      url: 'task/info',
      params: query,
      method: 'get'
    })
  }

  @PermissionAction()
  add(data) {
    return request({
      url: 'task/add',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  delete(data) {
    return request({
      url: 'task/remove',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  update(data) {
    return request({
      url: 'task/update',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  once(data) {
    return request({
      url: 'task/once',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  start(data) {
    return request({
      url: 'task/start',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  stop(data) {
    return request({
      url: 'task/stop',
      method: 'post',
      data
    })
  }
}

export default SysTask
