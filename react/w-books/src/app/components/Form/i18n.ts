import i18next from 'i18next';

const en = {
  "FormValidationRequired": "This field is required",
  "FormValidationMaxLength": "The maximum characters allowed is {0}",
  "FormValidationMinLength": "The minimum characters allowed is {0}",
  "FormValidationError": "The field value is not correct",
  "FormValidationValidate": "The field value does not match",
};

const es = {
  "FormValidationRequired": "Este campo es requerido",
  "FormValidationMaxLength": "El maximo de caracteres permitido es de {0}",
  "FormValidationMinLength": "El minimo de caracteres permitido es de {0}",
  "FormValidationError": "El valor ingresado no es correcto",
  "FormValidationValidate": "El valor ingresado no coincide",
};

i18next.addResources('en', 'translation', en);
i18next.addResources('es', 'translation', es);
