import React, { useState } from 'react'
import axios from 'axios'

import { i18n } from '../../translate/i18n';
import { WrapperButton, ButtonStyled, Main, Form, Error } from './styles';

import StyledTextarea from '../textarea';
import StyledInput from '../input';


const EmailForm = () => {
  const { t } = i18n;

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        subject: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = (e: any) => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/xjvlezbg',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          t("form.success")
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <Main>
      <Form onSubmit={handleOnSubmit}>
      <StyledInput
        label={t("form.name")}
        id="name"
        type="text"
        name="_name"
        onChange={handleOnChange}
        required
        value={inputs.name}
      />
      <StyledInput
        label={t("form.subject")}
        id="subject"
        type="text"
        name="_subject"
        onChange={handleOnChange}
        required
        value={inputs.subject}
      />
      <StyledInput
        label={t("form.email")}
        id="email"
        type="email"
        name="_email"
        onChange={handleOnChange}
        required
        value={inputs.email}
      />
    <StyledTextarea
        id="message"
        name="_message"
        label={t("form.message")}
        rows={5}
        onChange={handleOnChange}
        required
        value={inputs.message}
    />
      {status.info.error && (
        <Error>Error: {status.info.msg}</Error>
      )}
      {!status.info.error && status.info.msg && <Error>{status.info.msg}</Error>}
        <WrapperButton>
        <ButtonStyled type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? t("buttons.submit")
              : t("buttons.submited")
              : t("buttons.submiting")}
        </ButtonStyled>
        </WrapperButton>
      </Form>
    </Main>
  )
}
export default EmailForm;