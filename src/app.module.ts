import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@utils/auth/auth.module';
import { AgreementModule } from '@domain/agreement/agreement.module';
import { UserModule } from '@domain/user/user.module';
import { ChallengeModule } from '@domain/challenge/challenge.module';
import { ContextModule } from '@domain/context/context.module';
import { DidModule } from '@domain/did/did.module';
import { EcoverseModule } from '@domain/ecoverse/ecoverse.module';
import { OrganisationModule } from '@domain/organisation/organisation.module';
import { ProjectModule } from '@domain/project/project.module';
import { ReferenceModule } from '@domain/reference/reference.module';
import { TagsetModule } from '@domain/tagset/tagset.module';
import { ProfileModule } from '@domain/profile/profile.module';
import { UserGroupModule } from '@domain/user-group/user-group.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import aadConfig from '@config/aad.config';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import databaseConfig from '@config/database.config';
import { IDatabaseConfig } from '@interfaces/database.config.interface';
import { DataManagementModule } from '@utils/data-management/data-management.module';
import serviceConfig from '@config/service.config';
import { BootstrapModule } from '@utils/bootstrap/bootstrap.module';
import msGraphConfig from '@config/ms-graph.config';
import { WinstonModule } from 'nest-winston';
import aadClientConfig from '@config/aad.client.config';
import { WinstonConfigService } from '@config/winston.config';
import loggingConfig from '@config/logging.config';
import { SearchModule } from '@utils/search/search.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionsFilter } from '@utils/error-handling/http.exceptions.filter';
import aadRopcConfig from '@config/aad.ropc.config';
import { MetadataModule } from '@utils/metadata/metadata.module';
import { KonfigModule } from '@utils/config/config.module';
import aadOboConfig from '@config/aad.obo.config';
import { ValidationPipe } from '@utils/validation/validation.pipe';
import oidcConfig from '@config/oidc.config';
import { ApplicationModule } from '@domain/application/application.module';
import { NVPModule } from '@domain/nvp/nvp.module';
import { ApplicationFactoryModule } from '@domain/application/application.factory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env',
        '.env.default',
        '.env.aad.cherrytwist.api.default',
        '.env.aad.cherrytwist.client.default',
        '.env.logging.default',
        '.env.oidc.default',
      ],
      isGlobal: true,
      load: [
        aadConfig,
        databaseConfig,
        serviceConfig,
        msGraphConfig,
        aadClientConfig,
        loggingConfig,
        aadRopcConfig,
        aadOboConfig,
        oidcConfig,
      ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        insecureAuth: true,
        synchronize: false,
        cache: true,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        host: configService.get<IDatabaseConfig>('database')?.host,
        port: configService.get<IDatabaseConfig>('database')?.port,
        username: configService.get<IDatabaseConfig>('database')?.username,
        password: configService.get<IDatabaseConfig>('database')?.password,
        database: configService.get<IDatabaseConfig>('database')?.schema,
        logging: configService.get<IDatabaseConfig>('database')?.logging,
      }),
    }),
    AuthModule,
    ApplicationModule,
    ApplicationFactoryModule,
    NVPModule,
    AgreementModule,
    ChallengeModule,
    ContextModule,
    DidModule,
    EcoverseModule,
    OrganisationModule,
    ProfileModule,
    ProjectModule,
    ReferenceModule,
    TagsetModule,
    UserModule,
    UserGroupModule,
    MetadataModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      fieldResolverEnhancers: ['guards'],
      sortSchema: true,
      context: ({ req }) => ({ req }),
    }),
    DataManagementModule,
    BootstrapModule,
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    SearchModule,
    KonfigModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
