import Form from ".";
import Button from "../Button";
import Input from "../Input";

import useForm from '../../hooks/useForm'

export default function FormUploadFile({file = {}, changeFile}){
    const body = {
        title:file.path.split('.')[0],
        description:''
    }

    const {handlerChange, handlerSubmit, errors, bodyForm} = 
    useForm(body, response=>{
        console.log(response)
        console.log(file)
    })

    const closeForm = evt => changeFile(null)

    return (
        <Form onSubmit={handlerSubmit}>
            <Input type="text" 
            label="Title"
            name="title"
            error = {errors['title']}
            value={bodyForm.title || ''}
            onKeywoard={handlerChange}
            /> 
            <Input type="text-area" 
            onKeywoard={handlerChange}
            name="description"
            label="Description"/> 
            <div className="form__buttons">
                <Button text="Done" 
                modifier={['color-cyan', 'border-radius-10']}/>
                <Button text="Delete"
                onClick={closeForm}
                />
            </div>
        </Form>
    )
}