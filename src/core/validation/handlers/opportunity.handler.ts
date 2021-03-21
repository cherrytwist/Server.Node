/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import { OpportunityInput } from '@domain/challenge/opportunity/opportunity.dto.create';
import { ValidationException } from '@common/exceptions';
import { LogContext } from '@common/enums';
import { validate, ValidationError } from 'class-validator';
import { AbstractHandler } from './base/abstract.handler';

export class OpportunityHandler extends AbstractHandler {
  public async handle(
    value: any,
    metatype: Function
  ): Promise<ValidationError[]> {
    if (metatype === OpportunityInput) {
      const errors = await validate(value);
      if (errors.length > 0) {
        throw new ValidationException('DTO validation failed', LogContext.API);
      }
    }
    return super.handle(value, metatype);
  }
}
