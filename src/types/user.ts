export interface LoginData {
  email: string
  password: string
}

export interface UserInfo {
  id: string
  email: string
  role: string
  token: string
}

export type UserInfoRes = Omit<UserInfo, 'token'>
