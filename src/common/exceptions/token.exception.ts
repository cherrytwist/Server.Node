import { LogContext, CherrytwistErrorStatus } from '@common/enums';
import { BaseException } from './base.exception';

export class TokenException extends BaseException {
  constructor(error: string, code?: CherrytwistErrorStatus) {
    super(
      error,
      LogContext.AUTH_TOKEN,
      code ?? CherrytwistErrorStatus.INVALID_TOKEN
    );
  }
}
