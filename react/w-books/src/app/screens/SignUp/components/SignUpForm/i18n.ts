import i18next from 'i18next';

i18next.addResources('en', 'SignUpForm', {
  UserFormFirstName: 'Name',
  UserFormLastName: 'Last Name',
  UserFormEmail: 'Email',
  UserFormPassword: 'Password',
  UserFormConfirmPassword: 'Confirm Password',
  CLIENT_ERROR: 'The data entered is not valid'
});

i18next.addResources('es', 'SignUpForm', {
  UserFormFirstName: 'Nombre',
  UserFormLastName: 'Apellido',
  UserFormEmail: 'Email',
  UserFormPassword: 'Contraseña',
  UserFormConfirmPassword: 'Confirmacion de contraseña',
  CLIENT_ERROR: 'Los datos ingresados no son válidos'
});
