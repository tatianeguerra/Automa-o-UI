/// <reference types="cypress" />

context('funcionalidade login', () => {
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });
    
it('deve fazer login com sucesso', () => {
   
    cy.get('#username').type ('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get ('.page-title').should ('contain' , 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac')

});  

it('deve exibir uma mensagem de erro ao inserir usuario ou invalidos', () => {
    cy.get('.page-title'). should('contain' , 'Minha conta')
    
    cy.get('#username').type ('ebac@teste.com')
    cy.get('#password').type('teste@.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' ,'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.' )

});

it.only('deve exibir uma mensagem de erro ao inserir senha invalidos', () => {
    cy.get('.page-title'). should('contain' , 'Minha conta')
    
    cy.get('#username').type ('aluno_ebac@teste.com')
    cy.get('#password').type('teste@.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

});

});
