interface UploadedImage {
  fileId: string;
  url: string;
  name: string;
  filePath: string;
}

interface Project {
  id: string;
  name: string | null;
  imageUrl: string;
  imageKitId: string;
  filePath: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Transformation {
  aiRemoveBackground?: true;
  aiUpscale?: true;
  raw?: string;
}

interface UploadAuthResponse {
  signature: string;
  expire: number;
  token: string;
  publicKey: string;
}

interface CreateProjectData {
  imageUrl: string;
  imageKitId: string;
  filePath: string;
  name?: string;
}

interface UploadResponse {
  fileId: string;
  name: string;
  url: string;
  thumbnailUrl?: string;
  filePath: string;
  height?: number;
  width?: number;
  size: number;
}

interface Project {
  id: string,
  name: string | null,
  imageUrl: string,
  imageKitId: string,
  filePath: string,
  userId: string,
  createdAt: Date,
  updatedAt: Date
}

interface UserStats {
  totalProjects: number;
  thisMonth: number;
  thisWeek: number;
}