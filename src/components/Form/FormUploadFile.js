import Form from ".";
import Button from "../Button";
import Input from "../Input";

export default function FormUploadFile({refFile}){
    return (
        <Form>
            <Input type="text" label="Title"/> 
            <Input type="text-area" label="Description"/> 
            <div className="form__buttons">
                <Button text="Done" modifier={['color-cyan', 'border-radius-10']}/>
                <Button text="Delete"/>
            </div>
        </Form>
    )
}