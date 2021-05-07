import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredentialModule } from '@domain/agent/credential/credential.module';
import { AgentService } from './agent.service';
import { Agent } from '@domain/agent/agent';

@Module({
  imports: [CredentialModule, TypeOrmModule.forFeature([Agent])],
  providers: [AgentService],
  exports: [AgentService],
})
export class AgentModule {}