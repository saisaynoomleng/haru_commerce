export type ActionResponse<T> =
  | { success: true; message: string; data: T }
  | { success: true; error: string; field?: keyof T };
