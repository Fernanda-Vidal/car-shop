import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

export const bikeInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
  
export const bikeOutput: Motorcycle = new Motorcycle({
  id: '63780048100ec2f0e8f854a4',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});