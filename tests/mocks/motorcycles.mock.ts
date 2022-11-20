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

export const bikeList: IMotorcycle[] = [{
  id: '63780048100ec2f0e8f854a4',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
}, {
  id: '63780048100ec2f0e8f854v8',
  model: 'Yamaha XTZ 250 Ténéré',
  year: 2015,
  color: 'Blue',
  status: true,
  buyValue: 20.000,
  category: 'Trail',
  engineCapacity: 250,
}, {
  id: '63780048100ec2f0e8f854s9',
  model: 'Yamaha YS 250 Virago',
  year: 2002,
  color: 'Gray',
  status: true,
  buyValue: 13.000,
  category: 'Custom',
  engineCapacity: 250,
}, {
  id: '63780048100ec2f0e8f854a4',
  model: 'Honda Cb 450f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 450,
}];

export const id: any = { _id: '63780048100ec2f0e8f854a4' };

export const motoUpdate: IMotorcycle = {
  model: 'Honda Cb 450f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 450,
};