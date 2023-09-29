import formJSON from '../formElement/formElement.json';
import "./form.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Element from '../components/Element';
import { FormContext } from '../FormContext';

function Form() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
  const { fields, page_label } = elements ?? {}
  const handleSubmit = (event) => {
      event.preventDefault();

      const data = elements.fields.reduce((obj, curr) => ({...obj, [curr.field_id]: curr.field_value}), {})

      axios
      .post("https://597382c6-0a31-4518-97aa-bbb9a426bb1c.webhook.eus.azure-automation.net/webhooks?token=6Wt2dI3XHwYtE738VQ%2bDSPFrd7UL8l9L%2bToGSl7qra8%3d", JSON.stringify(data))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
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
