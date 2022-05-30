/// <reference types="cypress" />

describe('Funcinalidade Pagina de produto', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

     });

          it('Deve adicionar um produto ao carinho', () => {
            cy.get ('[class="product-block grid"]')
            //firs()
            //.last() 
            //.eq(6)
            .contains('Argus All-Weather Tank')
            .click()
    
          });
          it('deve adicionar um produto ao carrinho', () => {
            cy.get ('[class="product-block grid"]')
                .contains('Argus All-Weather Tank').click()
                cy.get('.button-variable-item-S').click()
                cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
                cy.get('.input-text').clear().type(2)
                cy.get('.single_add_to_cart_button').click()

                cy.get('.dropdown-toggle >.mini-cart-items').should('contain' , 2)
                cy.get('.woocommerce-message').should('contain', '2 × “Argus All-Weather Tank” foram adicionados no seu carrinho.')
                


          });
    });
