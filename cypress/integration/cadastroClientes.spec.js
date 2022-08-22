/// <reference types="cypress" />
var Chance = require('chance');
var chance = new Chance();

describe('Cadastro de clientes', () => {
    let user = {
        email: chance.email(),
        firstName: chance.first(),
        lastName: chance.last(),
        company: chance.company(),
        address1: chance.address(),
        address2: ["Apartment","suite","unit","building","floor"],
        city: chance.city(),
        state: chance.state({ full: true }),
        zip: chance.zip(),
        phoneMobile: chance.phone()
    }
    const positionAddress2 = Math.floor(Math.random() * user.address2.length)
     it('Quando for informados os dados do cliente e finalizar, então o cadastro deve ser efetuado', () => {
       cy.visit("?controller=authentication&back=my-account")
       cy.get("#email_create").type(user.email).tab()
       // Caso passar por este assert significa que o sistema fez as validações de e-mail válido.
       cy.get(".form-ok").should('be.visible')
       cy.get("#SubmitCreate").click()
       cy.get("input[id=id_gender1]",{ timeout: 10000 }).check()
       cy.get("#customer_firstname").type(user.firstName)
       cy.get("#customer_lastname").type(user.lastName)
       // Verifica se o e-mail digitado é igual ao e-mail informado na tela principal de login;
       cy.get("#email").should('contain.value',user.email)
       cy.get("#passwd").type('1234').tab()
       cy.get(".form-error").should('be.visible')
       cy.get("#passwd").clear().type('12345').tab()
       cy.get(".form-ok").should('be.visible')
       cy.get("select#days").select('11')
       cy.get("select#months").select('November')
       cy.get("select#years").select('1991')
       cy.get('input[type=checkbox]').check()
       // Verifica se a aplicação replicou o nome e sobrenome nos campos do endereço
       cy.get("input#firstname").should('contain.value',user.firstName)
       cy.get("input#lastname").should('contain.value',user.lastName)
       // Irá limpar os campos de nome e sobrenome e adicionar outros para a 'Entrega'
       cy.get("input#firstname").clear().type(chance.first())
       cy.get("input#lastname").clear().type(chance.last())
       cy.get("input#company").type(chance.last())
       cy.get("input#address1").type(chance.last())
       cy.get("input#address2").type(user.address2[positionAddress2])
       cy.get("input#city").type(user.city)
       cy.get("select#id_country").select('United States')
       cy.get("select#id_state").select('Alabama')
       cy.get("input#postcode").type(user.zip)
       cy.get("input#alias").type(chance.address())
       cy.get("input#phone_mobile").type(user.phoneMobile)
       cy.get("button#submitAccount").click()
       cy.url().should('contain','my-account')
    });
});