const request = require('supertest');

describe('Always true', () => {
  it('should always pass', () => {
    expect(true).toBe(true);
  });
});

console.log('Iniciando os testes...');

jest.setTimeout(30000);