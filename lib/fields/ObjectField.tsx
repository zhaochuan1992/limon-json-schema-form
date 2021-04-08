import { defineComponent } from "vue";
import { FieldPropsDefine } from "../types";

// import SchemaItem from '../SchemaItem'

// console.log(SchemaItem)

export default defineComponent({
    name: 'ObjectFeild',
    props: FieldPropsDefine,
    setup() {
        return () => <div>Object field</div>
    }
})