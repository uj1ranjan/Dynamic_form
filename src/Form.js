import formJSON from './formElement.json';
import "./form.css";
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';

function Form() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
  const { fields, page_label } = elements ?? {}
  const handleSubmit = (event) => {
      event.preventDefault();
      // create a new XMLHttpRequest
      var xhr = new XMLHttpRequest()
  
      // get a callback when the server responds
      xhr.addEventListener('load', () => {
        // update the state of the component with the result here
        console.log(xhr.responseText)
      })
      // open the request with the verb and the url
      xhr.open('POST', 'https://597382c6-0a31-4518-97aa-bbb9a426bb1c.webhook.eus.azure-automation.net/webhooks?token=6Wt2dI3XHwYtE738VQ%2bDSPFrd7UL8l9L%2bToGSl7qra8%3d')
      // send the request
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

      const data = elements.fields.reduce((obj, curr) => ({...obj, [curr.field_id]: curr.field_value}), {})
      xhr.send(JSON.stringify(data))

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
        <h3>{page_label}</h3>
        <form>
          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

      </div>
    </FormContext.Provider>
  );
}

export default Form;
