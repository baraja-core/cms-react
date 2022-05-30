export enum FlashMessageVariant {
  Success = 'success',
}

interface FlashMessageParams {
  variant: FlashMessageVariant;
  title?: string;
}

const useNotification = () => {
  const flashMessage = (message: string, params: FlashMessageParams | undefined) => {};

  return { flashMessage };
};

export default useNotification;
