import { Request, Response } from "express";
import { evaluateRisk } from "../services/calculateRiskRating";
import { RiskInput } from "../types/types";

const riskRatingController = (req: Request, res: Response): void => {
  const input: RiskInput = req.body;
  try {
    const output = evaluateRisk(input);
    res.status(200).json(output);
  } catch (error) {
    res
      .status(400)
      .json({ error: "There was an error processing your request" });
  }
};

export default riskRatingController;
