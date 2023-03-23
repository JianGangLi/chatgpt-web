import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://lijiangang-1303859149.cos.ap-shanghai.myqcloud.com/mingzi_logo.png',
      name: '建钢',
      description: '<a href="https://lijiangang-1303859149.cos.ap-shanghai.myqcloud.com/gpt%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.html" class="text-blue-500" target="_blank" >调教gpt说明</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
