import { createRequest, createResponse } from 'node-mocks-http';
import { Request, Response } from 'express';
import riskRatingController from '../../controllers/riskRatingController';
import { RiskInput, RiskOutput } from '../../types/types';
import * as calculateRiskRating from '../../services/calculateRiskRating';

const evaluateRiskSpy = jest.spyOn(calculateRiskRating, 'evaluateRisk');

describe('riskRatingController', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return risk rating', async () => {
    const mockRiskRating: RiskOutput = { risk_rating: 2 };

    evaluateRiskSpy.mockReturnValue(mockRiskRating);

    const mockRequestBody: RiskInput = {
      claim_history: 'crash, smash',
    };

    const mockRequest = createRequest({
      method: 'POST',
      body: mockRequestBody,
    });

    const mockResponse = createResponse();
    await riskRatingController(mockRequest as Request, mockResponse as Response);

    const result = JSON.parse(mockResponse._getData());

    if (result.error) {
      console.log('Error:', result.error);
    }

    expect(result).toEqual({
      risk_rating: mockRiskRating.risk_rating,
    });

    expect(mockResponse.statusCode).toBe(200);
  });

  it('should return 400 and an error message if there is an error', async () => {
    evaluateRiskSpy.mockImplementation(() => {
      throw new Error('There was an error processing your request');
    });

    const mockRequestBody: RiskInput = {
      claim_history: '',
    };

    const mockRequest = createRequest({
      method: 'POST',
      body: mockRequestBody,
    });

    const mockResponse = createResponse();
    await riskRatingController(mockRequest as Request, mockResponse as Response);

    const result = JSON.parse(mockResponse._getData());
    

    expect(result.error).toEqual('There was an error processing your request');
    expect(mockResponse.statusCode).toBe(400);
  });
});
