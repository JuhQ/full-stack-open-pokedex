describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('can navigate to a different page', function () {
    cy.visit('http://localhost:5000')
    cy.get('.list-item').eq(1).click()
    cy.contains('chlorophyll')
  })
})
