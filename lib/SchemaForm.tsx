import { defineComponent, PropType, provide, reactive } from 'vue'

import { Schema, SchemaTypes } from './types'

import SchemaItem from './SchemaItem'

import { SchemaFormContextKey } from './context'

export default defineComponent({
    props: {
        schema: {
            type: Object as PropType<Schema>,
            required: true
        },
        value: {
            required: true,
        },
        onChange: {
            type: Function as PropType<(v: any) => void>,
            required: true,
        }
    },
    name: 'SchemaForm',
    setup(props, { slots, emit, attrs }) {

        const handleChange = (v: any) => {
            props.onChange(v)
        }

        const context: any = reactive({
            SchemaItem
        })

        provide(SchemaFormContextKey, context)

        return () => {
            const { schema, value, onChange } = props
            return (
                <SchemaItem
                    schema={schema}
                    rootSchema={schema}
                    value={value}
                    onChange={handleChange}
                />
            )
        }
    }
})