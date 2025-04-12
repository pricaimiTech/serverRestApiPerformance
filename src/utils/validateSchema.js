import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true, strict: false });

export const validateSchema = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  return {
    valid,
    errors: validate.errors || [],
    errorText: validate.errors?.map(err => `${err.instancePath} ${err.message}`).join('; ') || ''
  };
};
