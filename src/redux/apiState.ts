export interface ApiState<T> {
  data: T | undefined;
  error: unknown;
  loading: boolean;
  success: boolean;
}

const initialApiState: Readonly<ApiState<never>> = { data: undefined, error: null, loading: false, success: false };

export const createApiState = <T>(overrides?: Partial<ApiState<T>>): ApiState<T> => ({
  ...initialApiState,
  ...overrides,
});

export const reWrapApiState = <T, TSelected>(
  apiState: ApiState<T>,
  selector: (state: T) => TSelected
): ApiState<TSelected> => ({
  data: apiState.data ? selector(apiState.data) : undefined,
  error: apiState.error,
  loading: apiState.loading,
  success: apiState.success,
});
