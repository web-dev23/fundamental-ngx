/**
 * Base class for BaseEntity and BaseValue
 *
 */
export abstract class Composite<T> {
    value: T;
    hasErrors: boolean;

    constructor(dto: T) {
        this.value = dto;
    }
}

export type CompositeDTOType<T> = T extends Composite<infer DTO> ? DTO : never;
