import { IUser } from '@domain/community';
import { IAuthorizationRule } from './authorization.rule.interface';

export class AuthorizationRuleEngine {
  authorizationRules: IAuthorizationRule[];

  constructor(authorizationRules: IAuthorizationRule[]) {
    this.authorizationRules = authorizationRules;
  }

  run(user: IUser): boolean {
    const orderedRules = this.authorizationRules.sort((a, b) =>
      a.priority < b.priority ? -1 : a.priority > b.priority ? 1 : 0
    );

    for (const rule of orderedRules) {
      if (rule.execute(user)) return true;
    }
    return false;
  }
}
