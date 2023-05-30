import { createRequest, createResponse } from 'node-mocks-http';
import { Request, Response } from 'express';
import carValueController from '../../controllers/carValueController';

import { CarValueInput, CarValueOutput } from '../../types/types';
import * as calculateCarValue  from '../../services/calculateCarValue';

describe('carValueController', () => {
  let calculateCarValueSpy: jest.SpyInstance;


  beforeEach(() => {
    calculateCarValueSpy = jest.spyOn(calculateCarValue, 'calculateCarValue');
  });

  afterEach(() => {
    calculateCarValueSpy.mockRestore();
  });

  it('should return car value', async () => {
    const mockRequestBody: CarValueInput = {
      model: 'Toyota Camry',
      year: 2015,
    };
    const mockCarValue: CarValueOutput = { car_value: 20000 };

    calculateCarValueSpy.mockReturnValue(mockCarValue);

    const mockRequest = createRequest({
      method: 'POST',
      body: mockRequestBody,
    });

    const mockResponse = createResponse();
    await carValueController(mockRequest as Request, mockResponse as Response);

    expect(mockResponse._getJSONData()).toEqual({ car_value: mockCarValue.car_value });
    expect(mockResponse._getStatusCode()).toBe(200);
  });

  it('should return 400 and an error message if there is an error', async () => {
    const mockRequestBody: CarValueInput = {
      model: 'Unknown Model',
      year: 2023,
    };
    const mockError: CarValueOutput = { error: 'Invalid model or year' };

    calculateCarValueSpy.mockReturnValue(mockError);
  
    const mockRequest = createRequest({
      method: 'POST',
      body: mockRequestBody,
    });
  
    const mockResponse = createResponse();
    await carValueController(mockRequest as Request, mockResponse as Response);
  
    expect(mockResponse._getJSONData()).toEqual({ error: mockError.error });
    expect(mockResponse._getStatusCode()).toBe(400);
  });
});
