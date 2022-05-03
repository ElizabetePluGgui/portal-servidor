import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { Alert, Button, GridContainer, Input } from 'components-ui-cmjau';

import { IndexStyles } from '../../../Restrito/Styles';
import { FormStyles } from '../Styles';

const Form = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldProcesso, setFieldProcesso] = useState('');
  const [fieldCurso, setFieldCurso] = useState('');
  const [fieldEntidade, setFieldEntidade] = useState('');
  const [fieldCargaHoraria, setFieldCargaHoraria] = useState('');
  const [fieldDataEmissao, setFieldDataEmissao] = useState('');
  const [fieldStatus, setFieldStatus] = useState('');
  const [fieldDataAceiteRecusa, setFieldDataAceiteRecusa] = useState('');
  const [fieldMotivoFimCurso, setFieldMotivoFimCurso] = useState('');
  
  
  const handleProcesso = evt => {
    setFieldProcesso(evt.target.value);
  };
  const handleCurso = evt => {
    setFieldCurso(evt.target.value);
  };
  const handleEntidade = evt => {
    setFieldEntidade(evt.target.value);
  };
  const handleCargaHoraria = evt => {
    setFieldCargaHoraria(evt.target.value);
  };
  const handleDataEmissao = evt => {
    setFieldDataEmissao(evt.target.value);
  };
  const handleStatus = evt => {
    setFieldStatus(evt.target.value);
  };
  const handleDataAceiteRecusa = evt => {
    setFieldDataAceiteRecusa(evt.target.value);
  }
  const handleMotivoFimCurso = evt => {
    setFieldMotivoFimCurso(evt.target.value);
  };
  
  return (
    <IndexStyles>
      <FormStyles>
        <h1>{props.title}</h1>
        <Container className="meio">
          <GridContainer columns={3}>
            <div className="select-container">
              <Input className="border border-secondary "
                field="processo"
                label="Processo"
                onChange={handleProcesso}
                placeholder="Digite aqui o número do Processo"
                value={fieldProcesso}
              />
            </div>
            <div className="select-container">
              <Input className="border border-secondary "
                field="curso"
                label="Curso"
                onChange={handleCurso}
                placeholder="Digite aqui o nome do Curso"
                value={fieldCurso}
              />
            </div>
            <div className="select-container">
              <Input className="border border-secondary "
                field="entidade"
                label="Entidade"
                onChange={handleEntidade}
                placeholder="Digite aqui o nome da Entidade"
                value={fieldEntidade}
              />
            </div>
          </GridContainer> 
          <GridContainer columns={3}>
            <div className="select-container ">
              <Input className="border border-secondary "
                field="CargaHoraria"
                label="Carga Horária"
                onChange={handleCargaHoraria}
                placeholder="Digite aqui a Carga Horária"
                value={fieldCargaHoraria}
              />
            </div>
            <div className="select-container ">
              <Input className="border border-secondary "
                field="DataEmissao"
                label="Data Emissão"
                onChange={handleDataEmissao}
                placeholder="Digite aqui a Data de Emissão do Curso"
                value={fieldDataEmissao}
              />
            </div>
            <div className="select-container ">
              <Input className="border border-secondary "
                field="Status"
                label="Status"
                onChange={handleStatus}
                placeholder="Digite aqui o Status"
                value={fieldStatus}
              />
            </div>
          </GridContainer> 
          <GridContainer columns={3}>
            <div className="select-container ">
              <Input className="border border-secondary "
                field="DataAceiteRecusa"
                label="Data de ACEITE/RECUSA"
                onChange={handleDataAceiteRecusa}
                placeholder="Digite aqui a Data de Aceite/Recusa"
                value={fieldDataAceiteRecusa}
              />
            </div>
            <div className="select-container ">
              <Input className="border border-secondary "
                field="MotivoFimCurso"
                label="Motivo Fim do Curso"
                onChange={handleMotivoFimCurso}
                placeholder="Digite aqui o Motivo Fim do Curso"
                value={fieldMotivoFimCurso}
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
