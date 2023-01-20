import React, { useState } from 'react';
import * as Yup from 'yup';

const MyFormSchema = Yup.object().shape({
  select: Yup.string()
    .required('Select is required'),
  
 
});

function MyForm() {
  const [formData, setFormData] = useState({
    select: '',
  });
  const [errors, setErrors] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    MyFormSchema.validate(formData, { abortEarly: false })
      .then(() => {
        setFormSubmit(true);
      })
      .catch(err => {
        const validationErrors = err.inner.reduce((errors, error) => {
          errors[error.path] = error.message;
          return errors;
        }, {});
        setErrors(validationErrors);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div><select name="select" value={formData.select} onChange={handleChange}>
        <option value="" disabled>Choice of Size</option>
        <option value="10$">Small</option>
        <option value="20$">Medium</option>
        <option value="30$">Large</option>
      </select>
      {errors.select && <p>{errors.select}</p>}
      
</div>
<div>
<div>
Choice of Sauce</div>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Normal</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Spicy Red</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Pesto</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Creamy</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>BBQ</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Taco</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Ranch</label>
      <input type="radio" name="filledIn"  value={formData.filledIn} onChange={handleChange} />
      <label>Mayonnaise</label>
    
      </div>
      <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} />
      <label>Kenar Sosu</label>
   
      <button type="submit" >Submit</button>
      {formSubmit && <div>Form submitted successfully!</div>}
    </form>
  );
}
export default MyForm;