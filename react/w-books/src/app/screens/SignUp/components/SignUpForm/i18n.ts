import i18next from 'i18next';

const en = {
  "UserFormFirstName":"Name",
  "UserFormLastName":"Last Name",
  "UserFormEmail":"Email",
  "UserFormPassword":"Password",
  "UserFormConfirmPassword":"Confirm Password",
};

const es = {
  "UserFormFirstName":"Nombre",
  "UserFormLastName":"Apellido",
  "UserFormEmail":"Email",
  "UserFormPassword":"Contraseña",
  "UserFormConfirmPassword":"Confirmacion de contraseña",
};

i18next.addResources('en', 'translation', en);
i18next.addResources('es', 'translation', es);
