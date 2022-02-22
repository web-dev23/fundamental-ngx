import { Schema } from '@fundamental-ngx/docs/common/schema';

export const COMPONENT_SCHEMAS: { [name: string]: Schema } = {
    media: {
        properties: {
            image: {
                type: 'string'
            },
            alt: {
                type: 'string'
            }
        },
        type: 'object'
    }
};
