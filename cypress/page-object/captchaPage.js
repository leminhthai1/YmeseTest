export class CaptchaPage {
    navigate(){
        cy.visit('http://sreeningtest.local/elementor-7/')
    }

    inputCaptcha(captcha){
        cy.get('.passster-captcha-input').type(captcha)
    }

    clickSubmitBtn(){
        cy.get('.passster-submit-captcha').click()
    }

    validateProtectTxt(){
        cy.get('label').should('have.text','Protected Area')
    }
}