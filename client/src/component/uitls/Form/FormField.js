import React from 'react';


const FormField =({formData, change, id})=> {

    const renderTempleate = ()=> {
        let formTemplate = null;
          switch(formData.element){
              case('input'):
                formTemplate = (
                    <div className="formBlock">
                      <input 
                        {...formData.config}
                        value={formData.value}
                        onBlur={(event)=> change({event,id,blur: true})}
                        onChange={(event)=> change({ event,id})}
                      />

                    </div>
                )
             break;
              default: 
              formTemplate = null;
          }
        
        return formTemplate;
    } 


    return (
        <div>
         {renderTempleate()}
        </div>
    )
}

export default FormField;