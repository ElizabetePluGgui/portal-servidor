import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { Alert, Button, GridContainer, Select, Input } from 'components-ui-cmjau';

import { IndexStyles } from '../../../Restrito/Styles';
import { FormStyles } from '../Styles';



const Form = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldDescription, setFieldDescription] = useState('');
  
  
  const handleDescription = evt => {
    setFieldDescription(evt.target.value);
  };
  
  return (
    <IndexStyles>
      <FormStyles>
        <h1>{props.title}</h1>
        <Container className="meio">
          
          <GridContainer columns={2}>
            <div className="select-container">
              <Input
                field="description"
                label="Processo"
                onChange={handleDescription}
                placeholder="Digite aqui o número do Processo"
                value={fieldDescription}
              />
            </div>
            
            
          </GridContainer>
          
          
          <GridContainer columns={2}>
            <div className="button-form">
              <Button
                label="Salvar"
                btnStyle="primary"
                type="button"
                onClick={() => console.log(1)}
              />
            </div>
            <div className="button-form">
              <Button
                label="Limpar"
                btnStyle="success"
                type="button"
                onClick={() => console.log(1)}
              />
            </div>
          </GridContainer>

          {errorMessage && (
            <Alert message={errorMessage} type={typeOfErrorMessage} />
          )}
        </Container>
      </FormStyles>
    </IndexStyles>
  );


};

export default Form;
