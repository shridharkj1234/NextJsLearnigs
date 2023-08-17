/**
 * @jest-environment jsdom
 */
import React from 'react';
import HomePage from '../pages/index';
import {render, screen} from '@testing-library/react'

describe("Home Page Test Cases", ()=>{
    it("render Home Page",()=>{
        render(<HomePage/>);
        screen.getByRole("heading",{name:/Next App/i})
    })
})

