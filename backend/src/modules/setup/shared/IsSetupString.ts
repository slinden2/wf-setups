import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ async: false })
export class _IsSetupString implements ValidatorConstraintInterface {
  validate(setup: string) {
    return /(^[12345]{4}$)/.test(setup);
  }
}

export function IsSetupString(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: _IsSetupString,
    });
  };
}
