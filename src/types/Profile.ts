import { ModuleType } from "./Module";

interface ProfileModuleType {
  profileId: number;
  moduleId: number;
  module: ModuleType;
}

export interface ProfileType {
  profileId: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  profileModule?: ProfileModuleType[];
}
