import Form from ".";
import Input from "../Input";

export default function FormUploadFile({refFile}){
    return (
        <Form>
            <Input type="text" label="Title"/> 
            <Input type="text-area" label="Description"/> 
        </Form>
    )
}