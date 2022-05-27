/// <reference types="cypress" />

context('funcionalidade login', () => {
it('deve fazer login com sucesso', () => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type ('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

});  

it('deve exibir uma mensagem de erro ao inserir usuario ou invalidos', () => {
    cy.get('.page-title'). should('contain' , 'Minha conta')
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type ('ebac@teste.com')
    cy.get('#password').type('teste@.com')
    cy.get('.woocommerce-form > .button').click()

});

it('deve exibir uma mensagem de erro ao inserir senha invalidos', () => {
    cy.get('.page-title'). should('contain' , 'Minha conta')
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type ('aluno_ebac@teste.com')
    cy.get('#password').type('teste@.com')
    cy.get('.woocommerce-form > .button').click()


});

});
