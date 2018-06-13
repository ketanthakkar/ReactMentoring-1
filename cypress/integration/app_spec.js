describe('App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8085');
    });

    it('assert that <title> is correct', () => {
        cy.title().should('include', 'App');
    });

    it('check value of input element', () => {
        cy.get('input').should('have.value', '');
    });

    it('type into input element', () => {
        cy.get('input').type('Film', { delay: 100 })
            .should('have.value', 'Film')
            .clear()
            .should('have.value', '');
    });
});
