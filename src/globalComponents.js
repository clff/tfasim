import MainLayout from '@/layout/MainLayout';
import FormInput from '@/components/FormElements/FormInput';
import FormLabel from '@/components/FormElements/FormLabel';
import Button from '@/components/common/Button';

const GlobalComponents = {
  install (app) {
    app.component('MainLayout', MainLayout);
    app.component('FormInput', FormInput);
    app.component('FormLabel', FormLabel);
    app.component('Button', Button);
  }
};

export default GlobalComponents;
