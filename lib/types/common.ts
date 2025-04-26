export type PageParams = Promise<{ id: string }>;
export type FormError = {
  fieldErrors: {
    [key: string]: string[];
  };
  formErrors: string[];
};
