class NoteImportPage {
    clickCalculadora() {
      cy.contains('Calculadora').click();
    }
  
    clickImportacaoNotasLink() {
      cy.contains('Importação de notas').click();
    }
  
    uploadNoteFile(filePath) {
      cy.get('input[type="file"]').then((subject) => {
        cy.fixture(filePath, 'binary')
          .then(Cypress.Blob.binaryStringToBlob)
          .then((fileContent) => {
            cy.wrap(subject).attachFile({
              fileContent,
              fileName: filePath,
              mimeType: 'application/pdf',
            });
          });
      });
    }
  
    clickEnviarButton() {
      cy.get('button.fontBotao2').click();
    }
  
    clickHistoricoNotasButton() {
      cy.get('.fontBotaoCancelar').click();
    }
  
    enviarNotaDeCorretagem(filePath) {
      this.clickCalculadora();
      this.clickImportacaoNotasLink();
      this.uploadNoteFile(filePath);
      this.clickEnviarButton();
      cy.wait(500);
      this.clickHistoricoNotasButton();
    }
  }
  
  export default NoteImportPage;
  