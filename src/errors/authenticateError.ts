import { CustomError } from './customError';

export class AuthenticateError extends CustomError{

    statusCode = 401;
    constructor() {
      super('Token Error');
      Object.setPrototypeOf(this, AuthenticateError.prototype);
    }
    serializeErrors() {
      return [
        {
          message: "Invalide token",
        },
      ];
    }
}