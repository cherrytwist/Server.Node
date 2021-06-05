import {
  Injectable,
  ExecutionContext,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { LogContext } from '@common/enums';
import { AuthenticationException } from '@common/exceptions';
import { AuthorizationEngineService } from '@src/services/authorization-engine/authorization-engine.service';
import { AgentInfo } from '@core/authentication';

@Injectable()
export class GraphqlGuard extends AuthGuard(['azure-ad', 'oathkeeper-jwt']) {
  identifier: number;

  constructor(
    private authorizationEngine: AuthorizationEngineService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {
    super();
    this.identifier = Math.floor(Math.random() * 10000);
  }

  // Need to override base method for graphql requests
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(
    err: any,
    agentInfo: any,
    info: any,
    _context: any,
    _status?: any
  ) {
    if (err) throw new AuthenticationException(err);

    const gqlContext = GqlExecutionContext.create(_context);
    const req = gqlContext.getContext().req;
    const graphqlInfo = gqlContext.getInfo();
    const fieldName = graphqlInfo.fieldName;

    if (fieldName === 'me') {
      this.logAuthorizationToken(req);
    }

    // There should always be an AgentInfo returned, even if it is empty
    if (!agentInfo) {
      this.logger.verbose?.(
        `[${this.identifier}] - AgentInfo NOT present, creating an empty AgentInfo.....`,
        LogContext.AUTH
      );
      return new AgentInfo();
    }

    this.authorizationEngine.logAgentInfo(
      `[${this.identifier}] - AgentInfo present with info: ${info}`,
      agentInfo
    );

    return agentInfo;
  }

  logAuthorizationToken(req: any) {
    try {
      let authorizationHeader: string = req.headers.authorization;
      if (authorizationHeader)
        authorizationHeader = authorizationHeader.substring(7);
      this.logger.verbose?.(
        `[${this.identifier}] - Authorization header token: ${authorizationHeader}`,
        LogContext.AUTH
      );
    } catch (error) {
      this.logger.error(
        `[${this.identifier}] - Unable to retrieve Authorization header token: ${req}`,
        LogContext.AUTH
      );
    }
  }
}
