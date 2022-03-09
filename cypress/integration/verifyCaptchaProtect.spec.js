/// <reference types="cypress" />

import { CaptchaPage } from "../page-object/captchaPage"

describe('Verify Captcha protect action', () => {
    const captchaPage = new CaptchaPage

    beforeEach(() =>{
        captchaPage.navigate()
    })

    //TC-006
    it('should able to input captcha into the textfield in Protect Page', () => {
    captchaPage.inputCaptcha('abcd')
    captchaPage.clickSubmitBtn()
    captchaPage.validateProtectTxt()
})

})