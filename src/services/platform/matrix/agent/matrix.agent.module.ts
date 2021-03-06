import { Module } from '@nestjs/common';
import { MatrixUserManagementModule } from '@src/services/platform/matrix/management/matrix.user.management.module';
import { MatrixGroupAdapterModule } from '../adapter-group/matrix.group.adapter.module';
import { MatrixRoomAdapterModule } from '../adapter-room/matrix.room.adapter.module';
import { MatrixUserAdapterModule } from '../adapter-user/matrix.user.adapter.module';
import { MatrixAgentService } from './matrix.agent.service';

@Module({
  imports: [
    MatrixUserManagementModule,
    MatrixUserAdapterModule,
    MatrixRoomAdapterModule,
    MatrixGroupAdapterModule,
  ],
  providers: [MatrixAgentService],
  exports: [MatrixAgentService],
})
export class MatrixAgentModule {}
