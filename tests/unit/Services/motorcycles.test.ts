import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { bikeInput, bikeOutput } from '../../mocks/motorcycles.mock';

describe('Testa a rota /motorcycles', function () {
  describe('Verifica se é possível', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('Cadastrar uma moto com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(bikeOutput);
      
      const service = new MotorcycleService();
      const result = await service.addCar(bikeInput);
      
      expect(result).to.be.deep.equal(bikeOutput);
    });
  });
});