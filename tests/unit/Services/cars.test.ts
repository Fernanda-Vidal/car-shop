import { expect } from 'chai';
import sinon from 'sinon';
import { Error, Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carList, carOutput, carUpdate, id } from '../../mocks/cars.service.mock';

describe('Testa a rota /cars', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Cadastrar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    
    const service = new CarService();
    const result = await service.create(carInput);
    
    expect(result).to.be.deep.equal(carOutput);
  });

  describe('Verifica listagem carros', function () {
    it('É possível listar todos os carros cadastrados com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(carList);
  
      const service = new CarService();
      const result = await service.getAll();
  
      expect(result).to.be.deep.equal(carList);
    });
  
    it('É possível listar um carro específico com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(carList[0]);
  
      const service = new CarService();
      const result = await service.getById('63780048100ec2f0e8f854a4');
  
      expect(result).to.be.deep.equal(carList[0]);
    });

    it('Não é possível listar um carro com id inválido', async function () {
      sinon.stub(Model, 'findById').resolves();
  
      try {
        const service = new CarService();
        await service.getById('XXX');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });

  describe('Verifica atualização de um carro', function () {
    it('É possível atualizar um carro com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(carList[0]);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carList[3]);
  
      const service = new CarService();
      const result = await service.update(id, carUpdate);
  
      expect(result).to.be.deep.equal(carList[3]);
    });

    it('Não é possível atualizar um carro com um id inválido', async function () {
      sinon.stub(Model, 'findById').resolves(false);
  
      try {
        const service = new CarService();
        await service.update(id, carUpdate);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });  
  });

  describe('Verifica a exclusão de um carro', function () {
    it('Não é possível deletar um carro inexistente', async function () {
      sinon.stub(Model, 'deleteOne').resolves({ deletedCount: 0 } as any);
  
      try {
        const service = new CarService();
        await service.delete('63780048100ec2f0e8f854a4');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
    //   it('É possível deletar um carro com sucesso', async function () {
    //     sinon.stub(Model, 'deleteOne').resolves({ deletedCount: 1 } as any);
  
    //     const service = new CarService();
    //     const result = await service.delete('63780048100ec2f0e8f854a4');
  
  //     expect(result).to.have.property('deletedCount', 1);
  //   });
  });  
});