import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const FormGroup = styled.form`
    max-width: 800px;
`;

const FormGroupItem = styled.div`
    display: flex;
    margin: ${theme.spacing.large} 0;
    gap: ${theme.spacing.mid};
    border: 1px solid ${theme.colors.backgroundInverted};
    padding: ${theme.spacing.mid};
    overflow: hidden;

    &:focus-within {
        border: 1px solid ${theme.colors.headerText};
    }
`;

const Label = styled.label`
    font-size: ${theme.fontSize.tiny};
    color: ${theme.colors.translucentText};

    @media (min-width: 800px) {
        font-size: ${theme.fontSize.small};
    }
`;

const InputText = styled.input`
    flex-grow: 1;
    height: 100%;
    border: 0;
    background: transparent;
    color: ${theme.colors.backgroundInverted};
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeight.light};
    font-size: ${theme.fontSize.tiny};

    &:focus {
        outline: 0;
    }
    @media (min-width: 800px) {
        font-size: ${theme.fontSize.small};
    }
`;

const Textarea = styled.textarea`
    flex-grow: 1;
    height: 100%;
    border: 0;
    background: transparent;
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.backgroundInverted};
    height: 100px;
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeight.light};
    font-size: ${theme.fontSize.tiny};

    &:focus {
        outline: 0;
    }
    @media (min-width: 800px) {
        font-size: ${theme.fontSize.small};
    }
`;

const Button = styled.button`
    text-decoration: none;
    display: inline-block;
    background: ${theme.colors.backgroundInverted};
    box-shadow: ${theme.shadows.button};
    padding: ${theme.spacing.mid};
    font-size: ${theme.fontSize.tiny};
    border-radius: ${theme.borderRadius.tiny};
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1;
    border: 0;
    color: ${theme.colors.bodyText};

    @media (min-width: 800px) {
        font-size: ${theme.fontSize.small};
        padding: ${theme.spacing.large};
        border-radius: ${theme.borderRadius.small};
    }

    &:hover {
        outline: 0;
        background: ${theme.colors.headerText};
    }

    &:focus {
        outline: 2px solid ${theme.colors.background};
    }

    &:active {
        outline: 0;
        background: ${theme.colors.headerText};
        box-shadow: none;
        position: relative;
        top: 8px;
        left: 8px;
    }
`;

const Form = () => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };      

    return (
        <FormGroup name="coaching" netlify>
            <FormGroupItem>
                <Label htmlFor="name">
                    Name
                </Label>
                <InputText id="name" type="text" value={nameValue} onChange={handleNameChange} autoComplete="off" name="name" />
            </FormGroupItem>
            <FormGroupItem>
                <Label htmlFor="email">
                    Email Address
                </Label>
                <InputText id="email" type="text" value={emailValue} onChange={handleEmailChange} autoComplete="off" name="email" />
            </FormGroupItem>
            <FormGroupItem>
                <Label htmlFor="textarea">
                    Message
                </Label>
                <Textarea id="textarea" value={textareaValue} onChange={handleTextareaChange} name="message" />
            </FormGroupItem>
            <Button type="submit">Submit</Button>
        </FormGroup>
    );
};

export default Form;
