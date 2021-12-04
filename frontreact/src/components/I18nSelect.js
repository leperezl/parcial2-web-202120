import React from 'react';
import { LOCALES } from '../i18n/locales';
import Dropdown from 'react-bootstrap/DropDown'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <option value={LOCALES.ENGLISH}>English</option>
      <option value={LOCALES.SPANISH}>Spanish</option>
    </select>
  );
};
