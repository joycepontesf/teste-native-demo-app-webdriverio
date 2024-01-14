describe('Funcionalidade de Form do webdriver.io', () => {
    it('Deve preencher o formulário com sucesso', async () => {

        await $('~Forms').click()
        await $('~text-input').setValue('Teste WebDriverIO')
        await $('~switch').click()
        await $('~Dropdown').click()
        await $(`//android.widget.CheckedTextView[@text="Appium is awesome"]`).click()
    })
})