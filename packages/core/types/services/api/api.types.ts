export type ApiSuccess<T> = { status: true; data: T };
export type ApiError = { status: false; message: string };
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
