/// <reference types="cypress" />

import { PasswordPage } from "../page-object/passwordPage"

describe('Verify password protect action', () => {
    const passwordPage = new PasswordPage

    beforeEach(() =>{
        passwordPage.navigate()
    })

    //TC-010
    it('should unlock the protected page after input correct password', () =>{
        passwordPage.inputPassword('password')
        passwordPage.clickSubmitBtn()
        passwordPage.validateTitleTxt()
    })

    //TC-001
    // it('should show the Protect Area block', ()=>{
    //     passwordPage.validateProtectTxt()
    // })

    //TC-006
    // it('should able to input data into the textfield in Protect Page', () => {
    //     passwordPage.inputPassword('abcd1234')
    //     cy.reload()
    //     passwordPage.validateProtectTxt()
    // })

    //TC-009
    // it('should clear the password after input the wrong password into the textfield in Protect Page', () =>{
    //     passwordPage.inputPassword('abcd1234')
    //     passwordPage.clickSubmitBtn()
    //     cy.get('#passster_password').should('be.empty')
    // })
})


