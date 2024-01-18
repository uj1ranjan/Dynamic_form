import formJSON from '../formElement/EnableEmailForwarding.json';
import "./form.css";
import { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import swal from 'sweetalert';

function Form() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
  const { fields, page_label, Description, WebhookURL } = elements ?? {}
  const handleSubmit = (event) => {
      event.preventDefault();
      //create a new XMLHttpRequest
      const xhr = new XMLHttpRequest()
  
      //get a callback when the server responds
      xhr.addEventListener('load', () => {
        //update the state of the component with the result here
        console.log(xhr.responseText)
      })
      // open the request with the verb and the url
      xhr.open('POST', WebhookURL)
      
      // send the request
      //xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
      const data = elements.fields.reduce((obj, curr) => ({...obj, [curr.field_id]: curr.field_value}), {})
      Object.assign(data, {Source : 'SelfService', Request_Type : '', requestraisedby : 'CloudOps1@TCSTEG.onmicrosoft.com'})
      console.log(data)
      
      
      xhr.send(JSON.stringify(data))

      if(xhr.HEADERS_RECEIVED === 2){

        swal({
          title: "Success!",
          text: "Form Submitted Successfully",
          icon: "success",
          button: "ok!",
        });
        window.onload = setTimeout(function(){
          //window.location.reload();
          alert('your Request has been initiated successfully you will be notified once it is Completed');
        }, 5000);
      }
      
    }
  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App_container">
        <div className= "header">
          <h3>{page_label}</h3>
        </div>
        <div className= "header2">
          <h6>{ Description }</h6>
        </div>
        <div className='div_content'>
          <form>
            {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
            <div className='button1'>
              <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default Form;
