import request from '@/utils/request'
import { PermissionAction, PermissionPrefix } from '@/core/permission/decorator'

@PermissionPrefix('sys/menu')
class SysMenu {
  @PermissionAction()
  list() {
    return request({
      url: 'menu/list',
      method: 'get'
    })
  }

  @PermissionAction()
  info(query) {
    return request({
      url: `menu/info/${query.menuId}`,
      method: 'get'
    })
  }

  @PermissionAction()
  add(data) {
    return request({
      url: 'menu/add',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  update(data) {
    return request({
      url: 'menu/update',
      method: 'post',
      data
    })
  }

  @PermissionAction()
  delete(data) {
    return request({
      url: 'menu/delete',
      method: 'post',
      data
    })
  }
}

export default SysMenu
