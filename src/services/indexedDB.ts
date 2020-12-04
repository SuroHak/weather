const config = {
  name: 'Weather',
  version: 1,
};

const { indexedDB } = window;
const storeName = 'DataStore';

class IndexedDB {
  static openDB(): Promise<IDBDatabase> {
    return new Promise(resolve => {
      if (!indexedDB) {
        return;
      }

      const openDB = indexedDB.open(config.name, config.version);

      openDB.onupgradeneeded = () => {
        openDB.result.createObjectStore(storeName, { keyPath: 'key' });
      };

      openDB.onsuccess = () => {
        resolve(openDB.result);
      };

      openDB.onerror = () => {
        const db = openDB.result;

        if (!db) {
          return null;
        }
      };
    });
  }

  protected async getStore(): Promise<IDBObjectStore | null> {
    const db = await IndexedDB.openDB();

    if (db) {
      const tx = db.transaction(storeName, 'readwrite');
      return tx.objectStore(storeName);
    }
    return null;
  }

  async getAllData() {
    const store = await this.getStore();
    if (!store) return null;

    const getData = store.getAll();

    return new Promise((resolve => {
      getData.onsuccess = () => {
        resolve(getData.result);
      };
    }));
  }

  async addData<T>(data: T) {
    const store = await this.getStore();

    if (!store) return;

    store.add(data);
  }

  async removeData(key: string) {
    const store = await this.getStore();
    if (!store) return;

    store.delete(key);
  }

  async removeAllData() {
    const store = await this.getStore();
    if (!store) return;

    store.clear();
  }

  async putData<T>(data: T) {
    const store = await this.getStore();
    if (!store) return;

    store.put(data);
  }

  async getData<T>(key: string | number): Promise<T | null> {
    const store = await this.getStore();
    if (!store) return null;

    const getData = store.get(key);

    return new Promise((resolve => {
      getData.onsuccess = () => resolve(getData.result);
      getData.onerror = () => resolve(null);
    }));
  }
}

export default new IndexedDB();
