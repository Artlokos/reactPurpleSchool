import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer,useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import Input from '../Input/Input';

function JournalForm({ onSubmit }) {
  const [formState,dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {isValid, isFormReadyToSubmit, values} = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();

  const focusError = (isValid) => {
    switch(true){
      case !isValid.title :
        titleRef.current.focus();
        break;
      case !isValid.date :
          dateRef.current.focus();
          break;  
      case !isValid.post :
            postRef.current.focus();
            break;
    };
  };

  useEffect(()=>{
    let timerId; 
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({type:'RESET_VALIDITY'});
      }, 2000);
    }

    return () =>{
      clearTimeout(timerId);
    };
  },[isValid]);

  useEffect(()=>{
    if(isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type:'CLEAR' });
    }
  },[isFormReadyToSubmit, values,onSubmit]);

  const onChange = (e) => {
    dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({type:'SUBMIT'});
  };

  return (
    <>
      <form className={styles['journal-form']} onSubmit={addJournalItem}>
        <div>
          <Input
            type="text"
            onChange={onChange}
            ref={titleRef}
            value={values.title}
            name="title"
            appearence='title'
            inValid = {isValid.title}
          />
        </div>
        <div className={styles['form-row']}>
            <label htmlFor='date' className={styles['form-label']}>
              <img src='/calendar.svg' alt='Иконка календаря' />
              <span>Дата</span>
            </label>
     
        <Input
          id='date'
          type="date"
          ref={dateRef}
          value={values.date}
          onChange={onChange}
          name="date"
          inValid = {isValid.date}         
        />
        </div>

        <div className={styles['form-row']}>
            <label htmlFor='tag' className={styles['form-label']}>
              <img src='/folder.svg' alt='Иконка папки' />
              <span>Метки</span>
            </label>
            <Input type='text' onChange={onChange} inValid = {isValid.tag} value={values.tag} id='tag' name="tag"/>
        </div>

        <textarea
          name="post"
          id="post"
          value={values.post}
          ref={postRef}
          onChange={onChange}
          cols="30"
          rows="10"
        ></textarea>
        <Button text="Сохранить" />
      </form>
    </>
  );
}

export default JournalForm;
