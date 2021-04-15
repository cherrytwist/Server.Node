import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { ProfileResolverMutations } from './profile.resolver.mutations';

describe('Profile3Resolver', () => {
  let resolver: ProfileResolverMutations;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    resolver = module.get<ProfileResolverMutations>(ProfileResolverMutations);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
