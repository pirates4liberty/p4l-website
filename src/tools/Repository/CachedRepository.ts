import { RepositoryCache } from "./RepositoryCache";

export abstract class CachedRepository<T> {
    private cache = new RepositoryCache<T>();
    private cacheOut = new RepositoryCache<T>();
    protected processItem: (item: T) => T = (item) => item;

    protected abstract fetchAll(): T[];

    private processAll(): T[] {
        const data = this.cache.load(() => this.fetchAll());

        return data.map((item) => {
            return this.processItem(item);
        });
    }

    getAll(cache: boolean = true, process: boolean = true): T[] {
        if (cache === false) {
            this.clearCache();
        }

        if (process === false) {
            return this.cache.load(() => this.fetchAll());
        }

        return this.cacheOut.load(() => this.processAll());
    }

    protected clearCache() {
        this.cache.clear();
        this.cacheOut.clear();
    }
}
