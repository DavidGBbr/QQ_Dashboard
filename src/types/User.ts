import { ProfileType } from "./Profile";

export interface UserType {
  userId: number;
  name: string;
  email: string;
  profile: ProfileType;
  profileId: number;
}
