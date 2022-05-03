import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { Alert, Button, GridContainer, Input } from 'components-ui-cmjau';

import { IndexStyles } from '../../../Restrito/Styles';
import { FormStyles } from '../Styles';

const Form = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldNomeDoFuncionario, setFieldNomeDoFuncionario] = useState('');
  const [fieldProcesso, setFieldProcesso] = useState('');
  const [fieldData, setFieldData] = useState('');
  const [fieldCurso, setFieldCurso] = useState('');
  
  const handleProcesso = evt => {
    setFieldProcesso(evt.target.value);
  };
  const handleData = evt => {
    setFieldData(evt.target.value);
  };
  const handleNomeDoFuncionario = evt => {
    setFieldNomeDoFuncionario(evt.target.value);
  };
  
  const handleCurso = evt => {
    setFieldCurso(evt.target.value);
  };
     
  return (
    <IndexStyles>
      <FormStyles>
        <h1>{props.title}</h1>
        <Container className="meio">
          <GridContainer columns={2}>
              <div className="select-container">
                <Input className="border border-secondary "
                  field="Processo"
                  label="Processo"
                  onChange={handleProcesso}
                  placeholder="Digite aqui o Processo"
                  value={fieldProcesso}
                />
              </div>
              <div className="select-container">
                <Input className="border border-secondary "
                  field="Data"
                  label="Data"
                  onChange={handleData}
                  placeholder="Informe Data"
                  value={fieldData}
                />
              </div>
              
          </GridContainer> 
          <GridContainer columns={2}>
              <div className="select-container">
                <Input className="border border-secondary "
                  field="NomeDoFuncionario"
                  label="Nome do Funcionário"
                  onChange={handleNomeDoFuncionario}
                  placeholder="Digite aqui o Nome do Funcionário"
                  value={fieldNomeDoFuncionario}
                />
              </div>
              <div className="select-container">
                <Input className="border border-secondary "
                  field="Curso"
                  label="Nome do Curso"
                  onChange={handleCurso}
                  placeholder="Digite aqui o Curso"
                  value={fieldCurso}
                />
              </div>
          </GridContainer>
          <GridContainer columns={1}>
            <div className="button-form">
                <Button
                  label="Alterar"
                  btnStyle="primary"
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
