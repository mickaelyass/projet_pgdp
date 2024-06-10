export interface AppUser {
  userId:UUID.UUID(),
  username:String,
  password:String,
  roles:String[]
}
