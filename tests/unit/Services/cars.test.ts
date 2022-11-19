import { expect } from 'chai';
import sinon from 'sinon';
import { Error, Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carList, carOutput, carUpdate, id, updateOutput } from '../../mocks/cars.service.mock';
import ICar from '../../../src/Interfaces/ICar';

describe('Testa a rota /cars', function () {
  describe('Verifica se é possível', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('Cadastrar um carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);
    
      const service = new CarService();
      const result = await service.addCar(carInput);
    
      expect(result).to.be.deep.equal(carOutput);
    });

    it('Listar todos os carros cadastrados com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(carList);

      const service = new CarService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(carList);
    });

    it('Listar um carro específico com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(carList[0]);

      const service = new CarService();
      const result = await service.getById('63780048100ec2f0e8f854a4');

      expect(result).to.be.deep.equal(carList[0]);
    });

    it('Atualizar um carro com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(carList[0]);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carList[3]);

      const service = new CarService();
      const result = await service.updateCar(id, carUpdate);

      expect(result).to.be.deep.equal(carList[3]);
    });
  });

  describe('Verifica se não é possível', function () {
    afterEach(function () {
      sinon.restore();
    });
    
    it('Listar um carro com id inválido', async function () {
      sinon.stub(Model, 'findById').resolves();

      try {
        const service = new CarService();
        await service.getById('XXX');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
});