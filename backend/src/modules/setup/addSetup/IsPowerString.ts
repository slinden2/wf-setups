import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ async: false })
export class _IsPowerString implements ValidatorConstraintInterface {
  validate(power: string) {
    return /(^[dD]\d{2}$)|(^[aAbBcC]\d{3}$)/.test(power);
  }
}

export function IsPowerString(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: _IsPowerString,
    });
  };
}
