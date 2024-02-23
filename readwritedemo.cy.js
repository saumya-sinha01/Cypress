import { data } from "cypress/types/jquery"

it( 'Read files using Fixture', function(){
cy.fixture('example.json').then((data)=>{
    cy.log(data.name)
})
})