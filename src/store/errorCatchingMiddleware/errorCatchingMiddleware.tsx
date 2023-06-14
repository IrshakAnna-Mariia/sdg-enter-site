import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errorMessage = action.payload.data?.message || action.payload.message || 'Something went wrong...';
    toast.error(errorMessage);
  }

  return next(action);
};
