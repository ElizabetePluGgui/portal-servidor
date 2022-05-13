import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import { Alert, Button, GridContainer, Input } from 'components-ui-cmjau';

import { IndexStyles } from '../../../Restrito/Styles';
import { FormStyles } from '../Styles';

const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;
const RESOURCE = 'adicionar';
const MAIN_ROUTE = `${REACT_APP_VERSION_API}/certificados/${RESOURCE}`;
const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

const baseURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;
// teste: Localhost:3005/v1/certificados/adicionar
axios.defaults.baseURL = baseURL;

const Form = props => {
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldProcesso, setFieldProcesso] = useState('');
  const [fieldCurso, setFieldCurso] = useState('');
  const [fieldEntidade, setFieldEntidade] = useState('');
  const [fieldCargaHoraria, setFieldCargaHoraria] = useState('');
  const [fieldDataEmissao, setFieldDataEmissao] = useState('');
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
  const handleMotivoFimCurso = evt => {
    setFieldMotivoFimCurso(evt.target.value);
  };
  const sendToApi = () => {
    ///v1/certificados/adicionar
    const data = {
      processo: fieldProcesso,
      curso: fieldCurso,
      entidade: 'Rocketseat',
      carga: 240,
      carga_tipo: 'horas',
      data_emissao: '2020-12-09T00:00:00.000Z',
      aceito: true,
      data_aceite_recusa: '2020-12-21T00:00:00.000Z',
      motivo_fim: 'CAPROF 3',
      matricula: 1,
      fun_id: 84,
    };

    const token = localStorage.getItem('token');

    axios.post(baseURL, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  };

  return (
    <IndexStyles>
      <FormStyles>
        <h1>{props.title}</h1>
        <Container className="meio">
          <GridContainer columns={2}>
            <div className="select-container">
              <Input
                field="processo"
                label="Processo"
                onChange={handleProcesso}
                placeholder="Digite aqui o número do Processo"
                value={fieldProcesso}
              />
            </div>
            <div className="select-container">
              <Input
                field="curso"
                label="Curso"
                onChange={handleCurso}
                placeholder="Digite aqui o nome do Curso"
                value={fieldCurso}
              />
            </div>
          </GridContainer>
          <GridContainer columns={2}>
            <div className="select-container">
              <Input
                field="entidade"
                label="Entidade"
                onChange={handleEntidade}
                placeholder="Digite aqui o nome da Entidade"
                value={fieldEntidade}
              />
            </div>
            <div className="select-container ">
              <Input
                field="CargaHoraria"
                label="Carga Horária"
                onChange={handleCargaHoraria}
                placeholder="Digite aqui a Carga Horária"
                value={fieldCargaHoraria}
              />
            </div>
          </GridContainer>
          <GridContainer columns={2}>
            <div className="select-container ">
              <Input
                field="DataEmissao"
                label="Data Emissão"
                onChange={handleDataEmissao}
                placeholder="Digite aqui a Data de Emissão do Curso"
                value={fieldDataEmissao}
              />
            </div>
            <div className="select-container ">
              <Input
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
                onClick={() => sendToApi()}
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
