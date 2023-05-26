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

    tratarExecaoCanvas(){
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Canvas is already in use')) {
          // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
          // antes de realizar a próxima ação
  
          // Retorne false para evitar que o Cypress encerre o teste automaticamente
          return false;
        }
      });
    }
  }
  
  export default NoteImportPage;
  