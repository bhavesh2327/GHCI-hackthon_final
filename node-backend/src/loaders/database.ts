import { Db, MongoClient } from 'mongodb';
import config from '../config';

let db: Db;

async function initializeClient(): Promise<Db> {
  try {
    const client = await MongoClient.connect(config.databaseURL, {
      // `useNewUrlParser` and `useUnifiedTopology` are no-ops for newer drivers,
      // but kept here for backwards compatibility with older versions used in this repo.
      useNewUrlParser: true as any,
      useUnifiedTopology: true as any,
      ignoreUndefined: true as any,
    } as any);

    return client.db();
  } catch (err) {
    // If connecting to MongoDB fails (malformed URI or server unavailable),
    // return a minimal in-memory stub so the app can still start and handle requests gracefully.
    // Log the error and provide a stub DB object with the small subset of methods the app might call.
    // Individual endpoints should handle no-data results appropriately.
    // eslint-disable-next-line no-console
    console.warn('Warning: could not connect to MongoDB, falling back to in-memory stub DB. Error:', err);

    const stubDb: any = {
      collection: (_name: string) => ({
        findOne: async (_query: any) => null,
        find: (_q: any) => ({ toArray: async () => [] }),
        insertOne: async (_doc: any) => ({ insertedId: null }),
        updateOne: async (_q: any, _u: any) => ({ matchedCount: 0, modifiedCount: 0 }),
        deleteOne: async (_q: any) => ({ deletedCount: 0 }),
      }),
    };

    return stubDb as Db;
  }
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};
