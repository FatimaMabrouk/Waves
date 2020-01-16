
export const validate = (element, formData = []) => {
  let error = [true,''];
  
   if(element.validation.email){
    //    /\S+@\S+\.\S+/
    const vaild = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!vaild ? 'Must be Valid' :''}` ;
    error = !vaild ? [vaild,message ] : error ;
   }

  if(element.validation.required) {
      const vaild = element.value.trim() !== '';
      const message = `${!vaild ? 'This fiels is required' :''}` ;
      error = !vaild ? [vaild,message ] : error ;
  }
     return  error 
}


 export const update = (element, formData, formName)=> {
    
    const newFormData = {
        ...formData
    }
    const newElemet = {
        ...newFormData[element.id]
    }
    newElemet.value = element.event.target.value;

    if(element.blur) {
        let validData =  validate(newElemet, formData);
        newElemet.vaild = validData[0];
        newElemet.validationMassege = validData[1];
    }
    newElemet.touched = element.blur;
    newFormData[element.id] = newElemet;

    return newFormData;
 }
