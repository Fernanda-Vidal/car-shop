import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { bikeInput, bikeList, bikeOutput, id, motoUpdate } from '../../mocks/motorcycles.mock';

describe('Testa a rota /motorcycles', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Cadastrar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(bikeOutput);
      
    const service = new MotorcycleService();
    const result = await service.addCar(bikeInput);
      
    expect(result).to.be.deep.equal(bikeOutput);
  });

  describe('Verifica listagem de motos', function () {
    it('É possível listar todos as motos cadastradas com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(bikeList);
  
      const service = new MotorcycleService();
      const result = await service.getAll();
  
      expect(result).to.be.deep.equal(bikeList);
    });
    
    it('É possível listar uma moto específica com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(bikeList[0]);
      
      const service = new MotorcycleService();
      const result = await service.getById('63780048100ec2f0e8f854a4');

      expect(result).to.be.deep.equal(bikeList[0]);
    });

    it('Não é possível listar um carro com id inválido', async function () {
      sinon.stub(Model, 'findById').resolves();
    
      try {
        const service = new MotorcycleService();
        await service.getById('XXX');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });

  describe('Verifica atualização de uma moto', function () {
    it('É possível atualizar um carro com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(bikeList[0]);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(bikeList[3]);
  
      const service = new MotorcycleService();
      const result = await service.updateCar(id, motoUpdate);
  
      expect(result).to.be.deep.equal(bikeList[3]);
    });

    it('Não é possível atualizar uma moto com um id inválido', async function () {
      sinon.stub(Model, 'findById').resolves(false);
  
      try {
        const service = new MotorcycleService();
        await service.updateCar(id, motoUpdate);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });  
  });

  describe('Verifica a exclusão de uma moto', function () {
    it('Não é possível deletar um carro inexistente', async function () {
      sinon.stub(Model, 'deleteOne').resolves({ deletedCount: 0 } as any);
  
      try {
        const service = new MotorcycleService();
        await service.delete('63780048100ec2f0e8f854a4');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });

    // it('É possível deletar um carro com sucesso', async function () {
    //   sinon.stub(Model, 'deleteOne').resolves({ deletedCount: 1 } as any);
  
    //   const service = new MotorcycleService();
    //   const result = await service.delete('63780048100ec2f0e8f854a4');
  
    //   expect(result).to.have.property('deletedCount', 1);
    // });
  });
});