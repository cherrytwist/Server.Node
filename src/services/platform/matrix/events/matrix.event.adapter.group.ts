import { IMatrixEventHandler } from '@src/services/platform/matrix/events/matrix.event.dispatcher';
import { MatrixClient } from '@src/services/platform/matrix/agent-pool/matrix.client.types';

const noop = function() {
  // empty
};

export class AutoAcceptGroupMembershipMonitorFactory {
  static create(
    client: MatrixClient
  ): IMatrixEventHandler['groupMyMembershipMonitor'] {
    return {
      complete: noop,
      error: noop,
      next: async ({ group }) => {
        if (group.myMembership === 'invite') {
          try {
            await client.acceptGroupInvite(
              group.groupId /* There are additional options, but not documented... saw that some are used in synapse */
            );
          } catch (ex) {
            console.info(
              'Suppressing exception when user is invited to a non-public group resulting in failure'
            );
            console.error(ex);
          }
        }
      },
    };
  }
}
