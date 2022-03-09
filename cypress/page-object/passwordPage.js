export class PasswordPage {
    navigate(){
        cy.visit('http://sreeningtest.local/elementor-20/')
    }

    inputPassword(password){
        cy.get('#passster_password').type(password)
    }

    clickSubmitBtn(){
        cy.get('.passster-submit').click()
    }

    validateProtectTxt(){
        cy.get('h4').should('have.text', 'Protected Area')
    }

    validateTitleTxt(){
        cy.get('.wp-block-post-title').should('have.text','Elementor #20')
    }
}