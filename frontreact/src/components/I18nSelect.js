import React from 'react';
import { LOCALES } from '../i18n/locales';
import Dropdown from 'react-bootstrap/DropDown'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormattedMessage} from 'react-intl';
import '../index.css'

export const I18nSelect = (props) => {
  const clickLang = (e) =>{
    props.setLanguage(e.target.value)
    
  }
  const clickEn = () =>{
    props.setLanguage(LOCALES.ENGLISH)
  }
  return (
    <select onChange= {clickLang}>
      <option value={LOCALES.ENGLISH}>US</option>
      <option value={LOCALES.SPANISH}>CO</option>
    </select>
  );
};
