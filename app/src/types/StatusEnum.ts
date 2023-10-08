export const RelationStatusEnum = {
  friend: 1,
  requested: 2,
  received: 3,
  blocked: 4,
  ignored: 5,
  rejected: 6,
} as const

export type RelationStatus = keyof typeof RelationStatusEnum

export type RelationStatusValue = typeof RelationStatusEnum[RelationStatus]

export const ProfileStatusEnum = {
  offline: 1,
  online: 2,
  busy: 3,
  deleted: 4,
}

export type ProfileStatus = keyof typeof ProfileStatusEnum

export type ProfileStatusValue = typeof ProfileStatusEnum[ProfileStatus]


export const RoomProfileStatusEnum = {
  owner: 1,
  admin: 2,
  member: 3,
  muted: 4,
  banned: 5,
  ignored: 6,
} as const

export type RoomProfileStatus = keyof typeof RoomProfileStatusEnum

export type RoomProfileStatusValue = typeof RoomProfileStatusEnum[RoomProfileStatus]

export const RoomStatusEnum = {
  active: 1,
  deleted: 2,
} as const

export type RoomStatus = keyof typeof RoomStatusEnum

export type RoomStatusValue = typeof RoomStatusEnum[RoomStatus]
