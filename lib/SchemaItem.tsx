import { defineComponent, PropType } from 'vue';
import { Schema, SchemaTypes, FieldPropsDefine } from './types'
// import StringField from './fields/StringField'
import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'

export default defineComponent({
    name: 'SchemaItem',
    props: FieldPropsDefine,
    setup(props) {
        return () => {
            const schema = props.schema

            // TODO: 如果type 没有指定，我们需要猜测type

            const type = schema.type

            let Component: any

            switch (type) {
                case SchemaTypes.STRING: {
                    Component = StringField
                    break
                }
                case SchemaTypes.NUMBER: {
                    Component = NumberField
                    break
                }
                default: {
                    console.warn(`${type} is not supported`)
                }
            }

            return <Component {...props} />
        }
    }
})