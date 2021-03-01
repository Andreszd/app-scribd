import Form from ".";
import Button from "../Button";
import Input from "../Input";

import useForm from '../../hooks/useForm'

export default function FormUploadFile({refFile}){
    const bodyForm = {
        title:'',
        description:''
    }

    const {handlerChange, handlerSubmit, errors} = useForm(bodyForm)

    return (
        <Form onSubmit={handlerSubmit}>
            <Input type="text" 
            label="Title"
            name="title"
            onKeywoard={handlerChange}
            /> 
            <Input type="text-area" 
            onKeywoard={handlerChange}
            name="description"
            label="Description"/> 
            <div className="form__buttons">
                <Button text="Done" modifier={['color-cyan', 'border-radius-10']}/>
                <Button text="Delete"/>
            </div>
        </Form>
    )
}