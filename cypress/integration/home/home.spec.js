describe("Home Page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("Header contains movie heading with a message that there are no movies", () => {
        //cy.get('.App-header').should('contain', 'Movies')
        cy.get('h1').should('contain', 'This is my favorite movie!')
    })

    //it("Tests to see if Movie is displayed when loaded in", () => {
            //First Input for list
    //    cy.get('input[name="newMovieName"]').should('contain', 'Guardians of the Galaxy Vol. 2')
    // })
  })

  