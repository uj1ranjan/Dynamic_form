import formJSON from '../formElement/formElement3.json';
import "./form.css";
import { useState, useEffect } from 'react';
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

    console.log(elements)
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
