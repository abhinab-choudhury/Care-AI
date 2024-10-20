import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const OvulationFormSchema = z.object({
  cervicalMucus: z.enum(['Yes', 'No', 'Maybe']),
  ovulationPain: z.enum(['Yes', 'No', 'Maybe']),
  increasedLibido: z.enum(['Yes', 'No', 'Maybe']),
  breastTenderness: z.enum(['Yes', 'No', 'Maybe']),
  moodChanges: z.enum(['Yes', 'No', 'Maybe']),
  bloating: z.enum(['Yes', 'No', 'Maybe']),
  temperatureShift: z.enum(['Yes', 'No', 'Maybe']),
  positiveOvulationTest: z.enum(['Yes', 'No', 'Maybe']),
  fatigue: z.enum(['Yes', 'No', 'Maybe']),
  acneSkinChanges: z.enum(['Yes', 'No', 'Maybe']),
  headaches: z.enum(['Yes', 'No', 'Maybe']),
  appetiteChanges: z.enum(['Yes', 'No', 'Maybe']),
  nausea: z.enum(['Yes', 'No', 'Maybe']),
  increasedSmell: z.enum(['Yes', 'No', 'Maybe']),
  lightSpotting: z.enum(['Yes', 'No', 'Maybe']),
});

export const PCODFormSchema = z.object({
  irregularMenstrualCycles: z.enum(['Yes', 'No', 'Sometimes']),
  weightGain: z.enum(['Yes', 'No', 'Sometimes']),
  acne: z.enum(['Yes', 'No', 'Sometimes']),
  hirsutism: z.enum(['Yes', 'No', 'Sometimes']),
  thinningHair: z.enum(['Yes', 'No', 'Sometimes']),
  ovulationIssues: z.enum(['Yes', 'No', 'Sometimes']),
  fertilityIssues: z.enum(['Yes', 'No', 'Sometimes']),
  insulinResistance: z.enum(['Yes', 'No', 'Sometimes']),
  fatigue: z.enum(['Yes', 'No', 'Sometimes']),
  mentalHealthSymptoms: z.enum(['Yes', 'No', 'Sometimes']),
  cystsInOvaries: z.enum(['Yes', 'No', 'Sometimes']),
  severeCondition: z.enum(['Yes', 'No', 'Sometimes']),
});


export function Calculate_PCOD_Probability(answerObject: any) {
    let pcodScore = 0;
    let maxScorePCOD = 0;
    const criteria: any = {
        "irregularMenstrualCycles": { pcod: 1 },
        "weightGain": { pcod: 1 },
        "acne": { pcod: 0.3 },
        "hirsutism": { pcod: 0.2 },
        "thinningHair": { pcod: 0.5 },
        "ovulationIssues": { pcod: 2 },
        "fertilityIssues": { pcod: 2 },
        "insulinResistance": { pcod: 1 },
        "fatigue": { pcod: 0.3 },
        "mentalHealthSymptoms": { pcod: 0.5 },
        "cystsInOvaries": { pcod: 2 },
        "severeCondition": { pcod: 0.5 }
    };

    for (const symptom in answerObject) {
        if (answerObject[symptom] === "Yes") {
            pcodScore += criteria[symptom].pcod;
        }
        maxScorePCOD += criteria[symptom].pcod;
    }
    const probabilityPCOD = (pcodScore / maxScorePCOD) * 100;
    return {
        probabilityPCOD: probabilityPCOD.toFixed(2) // rounding to 2 decimal places
    };
}

export function Predict_Ovulation(answerObject: any) {
    let ovulationScore = 0; 
    let maxOvulationScore = 0;

    const criteria: any = {
        "cervicalMucus": 2,
        "ovulationPain": 2,
        "increasedLibido": 1,
        "breastTenderness": 1,
        "moodChanges": 1,
        "bloating": 1,
        "temperatureShift": 2,
        "positiveOvulationTest": 3,
        "fatigue": 0.4,
        "acneSkinChanges": 0,
        "headaches": 0.2,
        "appetiteChanges": 0,
        "nausea": 0.1,
        "increasedSmell": 0.1,
        "lightSpotting": 1
    };

    for (const symptom in answerObject) {
        if (answerObject[symptom] === "Yes") {
            ovulationScore += criteria[symptom]; // Use criteria[symptom] instead of criteria[symptom].pcod
        }
        maxOvulationScore += criteria[symptom]; // Use criteria[symptom] instead of criteria[symptom].pcod
    }
    const probabilityOvulation = (ovulationScore / maxOvulationScore) * 100;
    return {
        probabilityOvulation: probabilityOvulation.toFixed(2) // rounding to 2 decimal places
    };
}
