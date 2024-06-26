import { Guide, Method, PrismaClient } from '@prisma/client/edge';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// globalThis는 전역객체에 접근할 수 있는 식별자
export const db = globalThis.prisma || new PrismaClient();
// use `prisma` in your application to read and write data in your DB

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// export const db = new PrismaClient();

export type GuideWithGuideComponent =
  | (Guide & {
      guide_component: {
        id: string;
        code: string | null;
        created_at: Date;
        updated_at: Date;
        guideId: string | null;
      } | null;
    })
  | null;
export type MethodWithGuide =
  | (
      | (Method & {
          guides: {
            id: string;
            description: string;
            order: number | null;
            created_at: Date;
            updated_at: Date;
            methodId: string | null;
          }[];
        })
      | null
    )
  | null;
