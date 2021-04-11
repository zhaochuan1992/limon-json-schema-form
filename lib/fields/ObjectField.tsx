import { defineComponent, inject, DefineComponent, ExtractPropTypes } from "vue";
import { FieldPropsDefine, CommonFieldType } from "../types";
import { isObject } from '../utils'
import { SchemaFormContextKey, useVJSFContext } from '../context'
// import SchemaItem from '../SchemaItem'

// console.log(SchemaItem)

// const TypeHelperComponent = defineComponent({
//     props: FieldPropsDefine
// })

// type SchemaItemDefine = typeof TypeHelperComponent

export default defineComponent({
    name: 'ObjectFeild',
    props: FieldPropsDefine,
    setup(props) {

        // const context: { SchemaItem: CommonFieldType } | undefined = inject(SchemaFormContextKey)
        const context = useVJSFContext()

        // if (!context) {
        //     throw Error('SchemeaForm should be used')
        // }

        const handleObjectFieldChange = (key: string, v: any) => {
            const value: any = isObject(props.value) ? props.value : {}

            if (v === undefined) {
                delete value[key]
            } else {
                value[key] = v
            }

            props.onChange(value)
        }

        return () => {
            const { schema, rootSchema, value } = props

            const { SchemaItem } = context

            const properties = schema.properties || {}

            const currentValue: any = isObject(value) ? value : {}

            return Object.keys(properties).map((k: string, index: number) => (
                <SchemaItem
                    schema={properties[k]}
                    rootSchema={rootSchema}
                    value={currentValue[k]}
                    key={index}
                    onChange={(v: any) => handleObjectFieldChange(k, v)}
                />
            ))
        }
    }
})