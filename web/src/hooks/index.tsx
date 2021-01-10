import React from 'react';

import { FormProvider } from './form';
import { ToastProvider } from './toast';

const Hooks: React.FC = ({ children }) => (
  <FormProvider>
    <ToastProvider>{children}</ToastProvider>
  </FormProvider>
);

export default Hooks;
