import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { Alert, Button, GridContainer, Input } from 'components-ui-cmjau';

import { IndexStyles } from '../../../Restrito/Styles';
import { FormStyles } from '../Styles';

const Form = props => {
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldMatriculaDoFuncionario, setFieldMatriculaDoFuncionario] =
    useState('');

  const handleMatriculaDoFuncionario = evt => {
    setFieldMatriculaDoFuncionario(evt.target.value);
  };

  return (
    <IndexStyles>
      <FormStyles>
        <h1>{props.title}</h1>
        <Container className="meio">
          <GridContainer columns={3}>
            <div className="select-container">
              <Input
                field="MatriculaDoFuncionario"
                label="Matrícula do Funcionário"
                onChange={handleMatriculaDoFuncionario}
                placeholder="Digite aqui o número do MatriculaDoFuncionario"
                value={fieldMatriculaDoFuncionario}
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
