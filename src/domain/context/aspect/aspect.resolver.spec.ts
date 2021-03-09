import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { AspectResolver } from './aspect.resolver';

describe('AspectResolver', () => {
  let resolver: AspectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    resolver = module.get<AspectResolver>(AspectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});