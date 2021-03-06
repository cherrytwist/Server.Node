import { AuthenticationError } from 'apollo-server-express';
import { LogContext } from '@common/enums';

export class AuthenticationException extends AuthenticationError {
  private context: LogContext;

  constructor(error: string) {
    super(error);
    this.context = LogContext.AUTH;
  }

  getContext(): LogContext {
    return this.context;
  }
}
