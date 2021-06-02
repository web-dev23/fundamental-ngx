import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    CachePolicy,
    FetchPolicy,
    IdentityKey,
    ChainingStrategyFieldsMap,
    BaseEntity,
    EntityDTOType,
    Type
} from '../../../domain/public_api';
import { QueryBuilder } from '../query/query-builder';
import { instanceForType } from '../domain/state-handler';
import { EntityCollectionService } from './entity-collection-service';
import { SubResourceStoreBuilder } from './entity-store-builder';
import { EntityStore, EntityStoreOptions } from './entity-store';


/**
 * Sub Resource Entity Store default implementation
 */
export class DefaultSubResourceEntityStore<T extends BaseEntity<EntityDTOType<T>>> implements EntityStore<T> {
    get queryBuilder(): QueryBuilder<T> {
        return this._queryBuilder;
    }

    constructor(
        protected readonly _entity: Type<T>,
        protected readonly _entityService: EntityCollectionService<EntityDTOType<T>>,
        protected readonly _queryBuilder: QueryBuilder<T>,
        protected readonly _primaryEntityStore: EntityStore<T>,
        protected readonly _options?: EntityStoreOptions<T>
    ) {
        // TODO: do something with options?
    }

    get(id: IdentityKey): Observable<T> {
        return this._entityService.getByKey(id).pipe(this._mapDTOtoEntityPipe());
    }

    save(entity: T): Observable<T> {
        if (entity && entity.identity) {
            return this._entityService.update(entity.value).pipe(this._mapDTOtoEntityPipe());
        }
        return this._entityService.add(entity.value).pipe(this._mapDTOtoEntityPipe());
    }

    delete(entity: T): Observable<T> {
        return this._entityService.delete(entity.value).pipe(map(() => entity));
    }

    createEntityInstance<K extends EntityDTOType<T>>(fromState?: K): T {
        return instanceForType(this._entity, fromState);
    }

    with(id: IdentityKey): SubResourceStoreBuilder {
        // it's needed to create some kind of a footprint
        // so this primary entity id can be used further in new
        // sub resource store, e.g. sub resource url generator
        throw new Error("Not implemented");    
    }

    /** 
     * @hidden 
     * Observable pipe to map the Entity DTO to the Entity class instance 
     */
    private _mapDTOtoEntityPipe<DTO extends EntityDTOType<T>>() {
        return pipe(map((dto: DTO) => this.createEntityInstance(dto)));
    }
}
