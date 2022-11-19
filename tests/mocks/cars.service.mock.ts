import Car from '../../src/Domains/Car';
import ICar from '../../src/Interfaces/ICar';

export const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput: Car = new Car({
  id: '63780048100ec2f0e8f854a4',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

export const carList: ICar[] = [{
  id: '63780048100ec2f0e8f854a4',  
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}, {
  id: '63780048100ec2f0e8f854v8',
  model: 'Gol',
  year: 2008,
  color: 'Red',
  status: false,
  buyValue: 18.000,
  doorsQty: 2,
  seatsQty: 5,
}, {
  id: '63780048100ec2f0e8f854s9',
  model: 'D-20',
  year: 1998,
  color: 'White',
  status: false,
  buyValue: 14.500,
  doorsQty: 2,
  seatsQty: 2,
}, {
  id: '63780048100ec2f0e8f854a4',
  model: 'Fiat Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
}];

export const id: any = { _id: '63780048100ec2f0e8f854a4' };

export const carUpdate: ICar = {
  model: 'Fiat Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};