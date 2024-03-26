import { PrismaService } from '@/database/prisma/prisma.service';

vi.mock('@prisma/client', () => {
  const PrismaClient = vi.fn();

  PrismaClient.prototype.$connect = vi.fn();
  PrismaClient.prototype.$disconnect = vi.fn();

  return { PrismaClient };
});

describe('Database service: Prisma', () => {
  let sut: PrismaService;

  const connectSpy = vi.spyOn(PrismaService.prototype, '$connect');
  const disconnectSpy = vi.spyOn(PrismaService.prototype, '$disconnect');

  beforeEach(() => {
    sut = new PrismaService();
    vi.resetAllMocks();
  });

  describe('onModuleInit', () => {
    it('should connect to database', async () => {
      await sut.onModuleInit();

      expect(connectSpy).toHaveBeenCalledOnce();
    });
  });

  describe('onModuleDestroy', () => {
    it('should destroy the database connection', async () => {
      await sut.onModuleDestroy();

      expect(disconnectSpy).toHaveBeenCalledOnce();
    });
  });
});
